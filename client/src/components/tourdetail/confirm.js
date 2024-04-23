import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
import config from "../../config";

export default function Confirm(props) {
  const { t, i18n } = useTranslation();

  let navigate = useNavigate();

  // function handleGetDetail2(){
  //   props.handleGetDetail2(props)
  // };

  const [Tourdata, setTourData] = useState([])
    useEffect(() => {
      DetailTour()
    }, [])

    const DetailTour = async () => {
        let result = await axios.get(`${config.apiUrlPrefix}/api/v1/tourdetail/${props.id}/`)
        setTourData(result.data)
    }

    const [Userdata, setUserData] = useState([])
    useEffect(() => {
      DataUser()
    }, [])

    const DataUser = async () => {
        let result = await axios.get(`${config.apiUrlPrefix}/api/v1/userinfo/${props.uid}/`)
        setUserData(result.data)
    }

    const bookingTour = async () => {
      let formField = new FormData()
      formField.append('userid', props.uid)
      formField.append('tourname', Tourdata.tourname)
      formField.append('bookingdate', props.Daytobook)
      formField.append('user_name_booking', Userdata.user_name)
      formField.append('user_surname_booking', Userdata.user_surname)
      formField.append('tourid', Tourdata.tourid)
      formField.append('child_count', props.ChildCount)
      formField.append('adult_count', props.AdultCount)
      formField.append('user_phonenumber_booking', Userdata.user_phonenumber)
      formField.append('tourprice', Tourdata.tourprice)
      formField.append('paymentstatus', "0")
      formField.append('pay_date', "2000-01-01")
      formField.append('pay_time', null)
      formField.append('pay_value', 0)
      formField.append('slippaymentimage', "slip_paymentimage/guessNumber.png")
      formField.append('bookingstatus', "0")
      formField.append('bankname', null)
      formField.append('banknumber', null)
      formField.append('refundstatus', null)
      formField.append('refundslipimage', null)
      console.log(formField.data)
  
      await axios({
        method: 'post',
        url:`${config.apiUrlPrefix}/addtourbooking/`,
        data: formField
      }).then(response=>{
        console.log(response.data);
        navigate(`/${props.uid}/alhome/${props.lang}/`) 
      }, (error) => {
        console.log(error);
      });
    }

  const handleOnClick = () => {
    props.handleClosePopup();
    bookingTour();
    //handleGetDetail2();
};

  return (
    console.log(props),
    <div>
      <Dialog
        open= {props.popup}
        onClose={props.handleClosePopup}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {t('Doyoureserve')}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Grid sx={{ mt: 3, mb: 2 }} container justify='space-between' style={{
                      textAlign:'center'
                  }}>
                <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
                {/* <Link to={`/${props.id}/payment/${props.lang}/`} style={{ textDecoration: 'none' }> */}
                <Button 
                  sx = {{ 
                    '&:hover': 
                        {color: '#1565c0',
                    backgroundColor: '#fefefe'},
                    border:1,
                    borderColor: '#1565c0',
                    marginRight:2
                  }}
                  align="center" variant="contained" 
                  onClick={handleOnClick}
                  >{t('Confirm')}</Button>
                  {/* </Link> */}
                </Grid>
                <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
                    <Button 
                      sx = {{ 
                        '&:hover': 
                            {color: 'red',
                            backgroundColor: '#fefefe'},
                      color: 'white',
                      backgroundColor: 'red',
                      border:1,
                      borderColor: 'red' }}
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