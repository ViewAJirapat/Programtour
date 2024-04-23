import { Button, Grid, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from "react";
import { Else, If, Then } from 'react-if';
import { useTranslation } from 'react-i18next';
import Popupreserve from './popupreserve';
import Reserveinfo from './Reserveinfo';
import axios from "axios";
import config from "../../config";


function Showrereserve(props) {
    const { t, i18n } = useTranslation();
    // const classes = useStyles()
    const [popup, setPopup] = useState(false);

    const handleOpenPopup = () => {
        setPopup(true);
        // console.log(popup)
    };
    const handleClosePopup = () => {
        setPopup(false);
    };

    const [rows, setRows] = useState([]);

    useEffect(() => {
        BookingGet()
    }, [])

    const BookingGet = async () => {
        let result = await axios.get(`${config.apiUrlPrefix}/api/v1/userbooking/`)
        setRows(result.data)
        console.log(result.data)
        // console.log("000")
    }
    return (
        <div>
        <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={12} lg={8} align = "center" justify = "center" alignItems = "center">
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center"><h4>{t('Bookingresult')}</h4></TableCell>
                        </TableRow>
                    </TableHead>
                    <Grid item xs={12} lg={12}>
                        {rows.map((row) => (
                            <Reserveinfo key={row.name} info={row} bookingget={BookingGet} lang={props.lang}/>
                        ))}
                            </Grid>
                </Table>
            </TableContainer>
        </Grid>
        </Grid>
         </div>                     
    );
   
};
  
export default Showrereserve;