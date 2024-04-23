import { Button, Grid, IconButton, TableCell, TableRow, Typography  } from '@mui/material';
import { Box } from '@mui/system';
// import * as React from 'react';
import React, { useEffect, useState } from "react";
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { If, Then, Else, When, Unless, Switch, Case, Default } from 'react-if';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Popupstatus from './popupstatus';




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
                                        <Button onClick={handleOpenPopup}> {t('Refundevidence')} </Button>
                                        <Popupstatus handleClosePopup={handleClosePopup} popup={popup} uid={props.uid} bookingget={bookingget} info={info} id={info.id} lang={lang}/>
                                        </Grid>
                                </Box>}
                                </Box>
    )
}

export default Information;