import { Button, Grid, IconButton, makeStyles, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { Box } from '@mui/system';
// import * as React from 'react';
import React, { useEffect, useState } from "react";
import Information from './Information';
import axios from "axios";
import { useTranslation } from 'react-i18next';
import config from "../../config";


function StatusTable(props) {
    const [rows, setRows] = useState([])
    const { t, i18n } = useTranslation();
    useEffect(() => {
        BookingGet()
    }, [])

    const BookingGet = async () => {
        let result = await axios.get(`${config.apiUrlPrefix}/api/v1/userbooking/`) //http://127.0.0.1:8000
        setRows(result.data)
        console.log(result.data)
        // console.log("000")
    }


    const [open, setOpen] = React.useState(false);
    // const classes = useStyles()
    const [popup, setPopup] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenPopup = () => {
        setPopup(true);
        // console.log(rows[0])
    };

    const handleClosePopup = () => {
        setPopup(false);
    };
    console.log(props.lang)

    return (
        <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={12} lg={8} align = "center" justify = "center" alignItems = "center">
            <TableContainer component={Paper} sx = {{
                width: "100%"
            }}>
                <Grid item xs={12} lg={12}>
                <Table aria-label="simple table">
                    <TableHead width="100%">
                            <TableRow>
                                <TableCell align="center"><h4>{t('Bookingresult')}</h4></TableCell>
                            </TableRow>
                    </TableHead>
                    <TableBody>
                    <Grid item xs={12} lg={12}>
                        {rows.map((row) => (
                            <Information key={row.name} uid={props.uid} info={row} bookingget={BookingGet} lang={props.lang}/>
                        ))}
                            </Grid>
                    </TableBody>
                </Table>
                </Grid>
            </TableContainer>
        </Grid>
        </Grid>
    );
};
  
export default StatusTable;