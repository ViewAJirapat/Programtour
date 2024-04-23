import { Button, Grid, IconButton, TableCell, TableRow, Typography  } from '@mui/material';
import { Box } from '@mui/system';
// import * as React from 'react';
import React, { useEffect, useState } from "react";
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { If, Then, Else, When, Unless, Switch, Case, Default } from 'react-if';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Popupreserve from './popupreserve';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axios from "axios";
import config from "../../config";




function Reserveinfo(props) {
    const { t, i18n } = useTranslation();

    const [popup, setPopup] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const { info, bookingget, lang  } = props;

    const [status, setStatus] = React.useState('');
    console.log(info)

    const handleChange = (event) => {
        setStatus(event.target.value);
    };

    const handleOpenPopup = () => {
        setPopup(true);
        // console.log(popup)
    };

    const handleClosePopup = () => {
        setPopup(false);
    };
    console.log(status)

    const ChangePaymentstatus = async () => {
        let formField = new FormData()
        formField.append('tourid',info.tourid)
        formField.append('userid',info.userid)
        formField.append('tourname',info.tourname)
        formField.append('bookingdate',info.bookingdate)
        formField.append('child_count',info.child_count)
        formField.append('adult_count',info.adult_count)
        formField.append('phone',info.phone)
        formField.append('tourprice',info.tourprice)
        formField.append('paymentstatus',status)
        formField.append('bookingstatus',info.bookingstatus)
        formField.append('user_name_booking',info.user_name_booking)
        formField.append('user_surname_booking',info.user_surname_booking)
        formField.append('user_phonenumber_booking',info.user_phonenumber_booking)
        console.log(formField.info)

  
        await axios({
            method: 'PUT',
            url: `${config.apiUrlPrefix}/api/v1/userbooking/${props.info.id}/`,
            data: formField
        }).then(response => {
            console.log(response.data);
        })
  
    }

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
                                    <Typography>{t('Paydate')}: {info.pay_date}</Typography>
                                    <Typography>{t('Paytime')}: {info.pay_time}</Typography>
                                    <Typography>{t('Money')}: {info.pay_value}</Typography>
                                    <If condition={info.paymentstatus == 0}>
                                        <Then>
                                            <Typography style={{color:"#ff1744"}}>{t('Havenotpaid')}</Typography>
                                            <Box sx={{ maxWidth: 240 }}>
                                                <FormControl fullWidth>
                                                    <InputLabel id="demo-simple-select-label">{t('Paymentstatus')}</InputLabel>
                                                    <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    value={status}
                                                    label={t('Paymentstatus')}
                                                    onChange={handleChange}
                                                    >
                                                    <MenuItem value={0} onClick={ChangePaymentstatus}>{t('Havenotpaid')}</MenuItem>
                                                    <MenuItem value={1} onClick={ChangePaymentstatus}>{t('Paid')}</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </Box>
                                            <Button sx = {{ 
                                                    '&:hover': 
                                                        {color: 'green',
                                                        backgroundColor: 'white'},
                                                    color: 'white',
                                                    backgroundColor: 'green',
                                                    border:1,
                                                    borderColor: 'green',
                                                    minHeight: 30 }} 
                                                    variant="contained" onClick={handleOpenPopup}>{t('Showpayment')}</Button>
                                            {/* <Typography style={{color:"#ff1744"}}>เวลากำหนดชำระเงิน: {info.reservename}</Typography> */}
                                        </Then>
                                        <Else>
                                            <Typography style={{color:"#76ff03"}}>{t('Paid')}</Typography>
                                            <Button sx = {{ 
                                                    '&:hover': 
                                                        {color: 'green',
                                                        backgroundColor: 'white'},
                                                    color: 'white',
                                                    backgroundColor: 'green',
                                                    border:1,
                                                    borderColor: 'green',
                                                    minHeight: 30 }} 
                                                    variant="contained" onClick={handleOpenPopup}>{t('Showpayment')}</Button>
                                        </Else>
                                    </If>
                                    <Grid sx={{ mt: 2, mb: 2 }} container spacing={0} justify='space' style={{
                                        // textAlign:'center'
                                    }}>
                                        <Popupreserve handleClosePopup={handleClosePopup} popup={popup} bookingget={bookingget} info={info} id={info.id} lang={lang}/>
                                        </Grid>
                                </Box>}
                                </Box>
    )
}

export default Reserveinfo;