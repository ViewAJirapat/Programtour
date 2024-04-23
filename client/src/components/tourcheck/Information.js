import { Button, Grid, IconButton, TableCell, TableRow, Typography  } from '@mui/material';
import { Box } from '@mui/system';
// import * as React from 'react';
import React, { useEffect, useState } from "react";
import CancelPopup from './cancelpopup';
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { If, Then, Else, When, Unless, Switch, Case, Default } from 'react-if';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';




function Information(props) {
    const { t, i18n } = useTranslation();

    const [popup, setPopup] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const { info, bookingget, lang  } = props;


    const handleOpenPopup = () => {
        setPopup(true);
        // console.log(popup)
    };

    const handleClosePopup = () => {
        setPopup(false);
    };

    return (
        <Box>
                                <TableRow
                                    // key={row.name}
                                    // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row" colspan="2" style={{width: '100%'}}>
                                        <Typography onClick={() => setIsOpen(!isOpen)}>{info.tourname} </Typography>
                                    </TableCell>
                                    <TableCell component="th" scope="row" colspan="2" style={{width: '100%'}}>
                                    <IconButton
                                        color="primary"
                                        aria-label="open drawer"
                                        edge="start"
                                    >
                                    </IconButton>
                                    <Button onClick={() => setIsOpen(!isOpen)} variant="outlined" color="primary" style={{ minWidth: '200'}}>
                                        {/* <ArrowDropDownIcon
                                        /> */}
                                        <div>...</div>
                                    </Button>
                                    </TableCell>
                                </TableRow>
                                {isOpen && <Box width="100%" padding="5" margin={1}>
                                    <Typography>{t('Bookername')}: {info.user_name_booking}</Typography>
                                    <Typography>{t('Tourcode')}: {info.id}</Typography>
                                    <Typography>{t('Child')}: {info.child_count}</Typography>
                                    <Typography>{t('Adult')}: {info.adult_count}</Typography>
                                    <If condition={info.paymentstatus == 0}>
                                        <Then>
                                            <Typography style={{color:"#ff1744"}}>{t('Havenotpaid')}</Typography>
                                            {/* <Typography style={{color:"#ff1744"}}>เวลากำหนดชำระเงิน: {info.reservename}</Typography> */}
                                        </Then>
                                        <Else>
                                            <Typography style={{color:"#76ff03"}}>{t('Paid')}</Typography>
                                        </Else>
                                    </If>
                                    <Grid sx={{ mt: 2, mb: 2 }} container spacing={0} justify='space' style={{
                                        // textAlign:'center'
                                    }}>
                                        <If condition={info.paymentstatus == 0}>
                                        <Then>
                                            <If condition={info.bookingstatus == 0}>
                                                <Then>
                                                <Link to={`/${props.uid}/${info.id}/payment/${lang}`} style={{ textDecoration: 'none' }}>
                                                <Button 
                                                    sx = {{ 
                                                        marginRight: "2",
                                                        '&:hover': 
                                                            {color: '#1565c0',
                                                        backgroundColor: '#fefefe'},
                                                        border:1,
                                                        borderColor: '#1565c0',
                                                        minHeight: 38 }}
                                                    variant="contained" size="small">{t('Payment')}</Button>
                                                    </Link>
                                                <Button sx = {{ 
                                                    '&:hover': 
                                                        {color: 'red',
                                                        backgroundColor: 'white'},
                                                    color: 'white',
                                                    backgroundColor: 'red',
                                                    border:1,
                                                    borderColor: 'red',
                                                    minHeight: 30 }} 
                                                    variant="contained" onClick={handleOpenPopup}>{t('Cancelbooking')}</Button>
                                                </Then>
                                                <Else>
                                                <Typography style={{color:"#33eaff"}}>{t('Canceledbooking')}</Typography>
                                                </Else>
                                            </If>
                                        </Then>
                                        <Else>
                                            <If condition={info.bookingstatus == 0}>
                                                <Then>
                                                    <Button sx = {{ 
                                                        '&:hover': 
                                                            {color: 'red',
                                                            backgroundColor: 'white'},
                                                        color: 'white',
                                                        backgroundColor: 'red',
                                                        border:1,
                                                        borderColor: 'red',
                                                        minHeight: 30 }} 
                                                        variant="contained" onClick={handleOpenPopup}>{t('Cancelbooking')}</Button>
                                                </Then>
                                                <Else>
                                                <If condition={info.bankname == null}>
                                                    <Then>
                                                        <Link to={`/${props.uid}/${info.id}/refundrequest/${lang}/`} style={{ textDecoration: 'none' }}><Button 
                                                            sx = {{ 
                                                                '&:hover': 
                                                                    {color: '#33eaff',
                                                                    backgroundColor: '#fefefe'},
                                                            color: 'white',
                                                            backgroundColor: '#33eaff',
                                                            border:1,
                                                            borderColor: '#33eaff' }}
                                                            align="center" variant="contained">{t('Refundrequest')}</Button></Link>
                                                    </Then>
                                                    <Else>
                                                    <Link to={`/${props.uid}/refundstatus/${lang}`} style={{ textDecoration: 'none' }}><Button 
                                                            sx = {{ 
                                                                '&:hover': 
                                                                    {color: '#76ff03',
                                                                    backgroundColor: '#fefefe'},
                                                            color: 'white',
                                                            backgroundColor: '#76ff03',
                                                            border:1,
                                                            borderColor: '#76ff03' }}
                                                            align="center" variant="contained">{t('Refundstatus')}</Button></Link>
                                                    </Else>
                                                </If>
                                                </Else>
                                            </If>
                                        </Else>
                                        </If>
                                        <CancelPopup handleClosePopup={handleClosePopup} popup={popup} uid={props.uid} bookingget={bookingget} info={info} id={info.id} lang={lang}/>
                                        </Grid>
                                </Box>}
                                </Box>
    )
}

export default Information;