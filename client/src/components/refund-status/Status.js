import { Button, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from "react";
import { Else, If, Then } from 'react-if';
import Popupstatus from './popupstatus';
import { useTranslation } from 'react-i18next';
import config from "../../config";


function Status() {
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

    const [status, setSatatus] = useState([]);

  useEffect( () => {
    fetch(`${config.apiUrlPrefix}/api/v1/userbooking/`)
      .then(response => response.json())
      .then(status => setSatatus(status))
      console.log(status)
    }, [])
    return (
        <div>
            {status.map(row => (
            <div key={row.id}>
        <Box marginTop={12}>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell><h4>{t('Tourname')}</h4></TableCell>
                            <TableCell align="center"><h4>{t('Bookername')}</h4></TableCell>
                            <TableCell align="center"><h4>{t('Bookingid')}</h4></TableCell>
                            <TableCell align="center"><h4>{t('Refundstate')}</h4></TableCell>
                            <TableCell align="center"><h4>{t('Refundevidence')}</h4></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.tourname}
                                </TableCell>
                                <TableCell align="center">{row.user_name_booking} {row.user_surname_booking} </TableCell>
                                <TableCell align="center">{row.tourid}</TableCell>
                                <TableCell align="center">
                                <If condition={row.refundstatus == 0}>
                                        <Then>
                                            <Typography style={{color:"#ff1744"}}>{t('Havenotrefund')}</Typography>
                                            {/* <Typography style={{color:"#ff1744"}}>เวลากำหนดชำระเงิน: {info.reservename}</Typography> */}
                                        </Then>
                                        <Else>
                                            <Typography style={{color:"#76ff03"}}>{t('Haverefund')}</Typography>
                                        </Else>
                                    </If>
                                </TableCell>
                                <TableCell align="center">
                                    <Stack spacing={1}>
                                        <Button 
                                            sx = {{ 
                                                '&:hover': 
                                                    {color: '#1565c0',
                                                backgroundColor: '#fefefe'},
                                                border:1,
                                                borderColor: '#1565c0',
                                                minHeight: 30 }}
                                            variant="contained" onClick={handleOpenPopup} size="small">{t('Showimage')}</Button>
                                            <Popupstatus handleClosePopup={handleClosePopup} id={row.id} popup={popup}/>
                                    </Stack>
                                </TableCell>
                            </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            {/* <CancelPopup handleClosePopup={handleClosePopup} open={open}/> */}
        </Box>
         </div>                     
         ))}
        </div>
    );
   
};
  
export default Status;