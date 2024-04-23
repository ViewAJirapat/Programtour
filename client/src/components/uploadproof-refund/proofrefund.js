import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Button, Grid, TextField } from '@mui/material';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import axios from "axios";
import config from "../../config";

const theme = createTheme();



export default function Proof(props) {
  const { t, i18n } = useTranslation();
  const [images, setImages] = useState([]);
  const [imageURLs, setImageURLs] = useState([]);

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

  useEffect(() => {
    if (images.length < 1) return;
    const newImageUrls = [];
    images.forEach(image => newImageUrls.push(URL.createObjectURL(image)));
    setImageURLs(newImageUrls);
  }, [images]);
  
  function onImageChange(e){
    setImages([...e.target.files]);
  }
  console.log("Images : ", images);
  console.log("imageURLs : ", imageURLs);

  const [popup, setPopup] = useState(false);

    const handleOpenPopup = () => {
        setPopup(true);
        // console.log(popup)
    };

    const handleClosePopup = () => {
        setPopup(false);
    };
    console.log(images)

    const uploadRefundImage = async () => {
      let formField = new FormData()
      formField.append('tourid',data.tourid)
      formField.append('userid',data.userid)
      formField.append('tourname',data.tourname)
      formField.append('bookingdate',data.bookingdate)
      formField.append('child_count',data.child_count)
      formField.append('adult_count',data.adult_count)
      formField.append('phone',data.phone)
      formField.append('tourprice',data.tourprice)
      formField.append('paymentstatus',data.paymentstatus)
      formField.append('bookingstatus',data.bookingstatus)
      formField.append('refundstatus', '1')
      formField.append('user_name_booking',data.user_name_booking)
      formField.append('user_surname_booking',data.user_surname_booking)
      formField.append('user_phonenumber_booking',data.user_phonenumber_booking)
      console.log(formField.data)

      if(images !== null) {
        formField.append('refundslipimage', images[0])
      }
      console.log(formField)

      await axios({
          method: 'PUT',
          url: `${config.apiUrlPrefix}/v1/userbooking/${props.id}/`,
          data: formField
      }).then(response => {
          console.log(response.data);
      })

  }


return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: 'relative',
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
      </AppBar>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }} >
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            {t('Refundevidence')}
          </Typography>
          <React.Fragment>
      <Typography variant="h6"  textAlign='center'>
        {t('Refunddetail')}
      </Typography>
      <Grid container spacing={7}>
        <Grid item xs={12} sm={12}>
          <TextField
            required
            id="วันที่คืนเงิน"
            name="วันที่คืนเงิน"
            label={t('Refundday')}
            fullWidth        
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            required
            id="เวลาโดยประมาณ"
            name="เวลาโดยประมาณ"
            label={t('Refundtime')}
            fullWidth        
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            required
            id="จำนวนเงิน"
            name="จำนวนเงิน"
            label={t('Money')}
            fullWidth           
          />
        </Grid>     
      </Grid>
    </React.Fragment>
        </Paper>
      </Container>
        <Container component="main" maxWidth="sm" sx={{ mb: 4 }} >
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography variant="h5" gutterBottom align='left'>
           {t('Refundevidence')}
          </Typography>
          <div>
          <input type="file" multiple accept='image/*' onChange={onImageChange}/>
              {imageURLs.map((imageSrc, idx) => (
              <img width='500' height='360' src={imageSrc} />
            ))}

          </div>
        </Paper>
        </Container>
        <Container component="main" maxWidth="xs" sx={{ mb: 1 }} >
          <Grid sx={{ mt: 3 }} container justify='space-between' style={{
                        textAlign:'center'
                    }}>
                  <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
                  <Link to={`/AdminHome/${props.lang}/`} style={{ textDecoration: 'none' }}>
                  <Button 
                    sx = {{ 
                      '&:hover': 
                          {color: 'red',
                          backgroundColor: '#fefefe'},
                    color: 'white',
                    backgroundColor: 'red',
                    border:1,
                    borderColor: 'red' }}
                    align="center" variant="contained" onClick={uploadRefundImage}>{t('Confirm')}</Button>
                    </Link>
                  </Grid>
                  <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
                  <Link to={`/AdminHome/${props.lang}/`} style={{ textDecoration: 'none' }}>
                      <Button 
                        sx = {{ 
                          '&:hover': 
                              { color: '#1565c0',
                          backgroundColor: '#fefefe'},
                          border:1,
                          borderColor: '#1565c0'
                        }}
                          variant="contained">
                            {t('Cancel')}
                  </Button>
                  </Link>
                  </Grid>
              </Grid>
            </Container>

    </ThemeProvider>
  );
}