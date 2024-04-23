import React, { useState, useEffect } from 'react';
import { Button, Grid, TextField } from '@mui/material';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import axios from "axios";
import { If, Then, Else, When, Unless, Switch, Case, Default } from 'react-if';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import config from "../../config";




function CantRefundInfo(props) {
  const { t, i18n } = useTranslation();

  let navigate = useNavigate()

  const [tourid, setTourid] = useState(false);
  const [user_name_booking, setUser_name_booking] = useState(null)
  const [user_surname_booking, setUser_surname_booking] = useState(null)
  const [bookingdate, setBookingdate] = useState(null)
  const [bankname, setBankname] = useState(null)
  const [banknumber, setBanknumber] = useState(null)
  const [data, setData] = useState([])
    useEffect(() => {
        BookingGet()
    }, [])

    const BookingGet = async () => {
        let result = await axios.get(`${config.apiUrlPrefix}/api/v1/userbooking/${props.id}/`)
        setData(result.data)
        console.log(result.data)
        // console.log("000")
    }

  // console.log(props.id)

  const addrequest = async () => {
    var axios = require('axios');
    var newdata = JSON.stringify({
      "userid": data.userid,
      "tourname": data.tourname,
      "bookingdate": data.bookingdate,
      "user_name_booking": data.user_name_booking,
      "user_surname_booking": data.user_surname_booking,
      "tourid": data.tourid,
      "child_count": data.child_count,
      "adult_count": data.adult_count,
      "user_phonenumber_booking": data.user_phonenumber_booking,
      "tourprice": data.tourprice,
      "paymentstatus": data.paymentstatus,
      "bookingstatus": data.bookingstatus,
      "bankname": bankname,
      "banknumber": banknumber,
      "refundstatus": 0,
      "refundslipimage": data.refundslipimage
    });

    var config = {
      method: 'put',
      url: `${config.apiUrlPrefix}/api/v1/userbooking/${props.id}/`,
      headers: { 
        'Content-Type': 'application/json'
      },
      data : newdata
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
      <Box sx={{ width: '1'}}>
      <Container component="main" maxWidth="sm" sx={{ mb: 1 }} >
      <Paper variant="outlined" sx={{ my: { xs: 1, md: 5 }, p: { xs: 2, md: 3 }, margin: 3 }}>
        <Typography sx = {{ margin: 2 }} component="h1" variant="h4" align="center">
          {t('SentRefundrequest')}
        </Typography>
        <React.Fragment>
    <Grid container spacing={3}>
      <Grid item lg={12} xs={12}>
        <Typography sx = {{ margin: 2 }} component="h1" variant="h4" align="center">
          {t('CantRefund')}
        </Typography>
      </Grid>
    </Grid>
  </React.Fragment>
          <Grid sx={{ mt: 3 }} align="center" containerstyle={{
                    textAlign:'center' // this does the magic
                }}>
              <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
              <Link to={`/${props.uid}/alhome/${props.lang}`} style={{ textDecoration: 'none' }}>
              <Button 
                sx = {{ 
                  '&:hover': 
                      {color: 'red',
                      backgroundColor: '#fefefe'},
                color: 'white',
                backgroundColor: 'red',
                border:1,
                borderColor: 'red' }}
                align="center" variant="contained" onClick={addrequest}>{t('Home')}</Button>
                </Link>
              </Grid>
          </Grid>
      </Paper>
    </Container>
  </Box>
    )
}

export default CantRefundInfo;