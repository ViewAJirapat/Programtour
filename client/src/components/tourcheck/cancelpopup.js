import React, { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
import Information from "./Information";
// import DialogTitle from '@mui/material/DialogTitle';
import { useTranslation } from 'react-i18next';
import config  from "../../config";

export default function CancelPopup(props) {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const { id, info, lang  } = props;
  // console.log(info)

  // const deleteUser = async (id) => {
  //   let link = '/${id}/refundrequest'
  //   navigate(link)
  // }
  const cancel = async () => {
    var axios = require('axios');
    var data = JSON.stringify({
      "userid": info.userid,
      "tourname": info.tourname,
      "bookingdate": info.bookingdate,
      "user_name_booking": info.user_name_booking,
      "user_surname_booking": info.user_surname_booking,
      "tourid": info.tourid,
      "child_count": info.child_count,
      "adult_count": info.adult_count,
      "user_phonenumber_booking": info.user_phonenumber_booking,
      "tourprice": info.tourprice,
      "paymentstatus": info.paymentstatus,
      "bookingstatus": "1",
      "bankname": info.bankname,
      "banknumber": info.banknumber,
      "refundstatus": "0",
    });

    var config = {
      method: 'put',
      url: `${config.apiUrlPrefix}/api/v1/userbooking/${id}/`,
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };

    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });

  }

  return (
    <div>
      <Dialog
        open= {props.popup}
        onClose={props.handleClosePopup}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {t('Doyoucancel')}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Grid sx={{ mt: 3, mb: 2 }} container justify='space-between' style={{
                      textAlign:'center'
                  }}>
                <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
                <Link to={`/${props.uid}/${id}/refundrequest/${lang}/`} style={{ textDecoration: 'none' }}><Button 
                  sx = {{ 
                    '&:hover': 
                        {color: 'red',
                        backgroundColor: '#fefefe'},
                  color: 'white',
                  backgroundColor: 'red',
                  border:1,
                  borderColor: 'red',
                  marginRight:2 }}
                  align="center" variant="contained" onClick={cancel}>{t('Confirm')}</Button></Link>
                </Grid>
                <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
                    <Button 
                      sx = {{ 
                        '&:hover': 
                            {color: '#1565c0',
                        backgroundColor: '#fefefe'},
                        border:1,
                        borderColor: '#1565c0'
                      }}
                        variant="contained" onClick={props.handleClosePopup}>
                          {t('Cancel')}
                </Button>
                </Grid>
            </Grid>
        </DialogActions>
      </Dialog>
    </div>
  );
}