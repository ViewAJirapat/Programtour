import { Box, Button, Container, Grid, Paper, Stack,  Typography } from "@mui/material";
import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import config from "../../config";


function Paymentinfo(props){
  const { t, i18n } = useTranslation();
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

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} lg={6} marginTop={2} justify='center'>
                <Box>
                  <Container component="main" maxWidth="lg" sx={{ mb: 4 }}>
                  <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                    <Typography component="h1" variant="h4" align="center" marginTop={2} >
                      {t('Payment')}
                    </Typography>
                    <Typography component="h3" variant="h5" align="center" marginTop={2} >
                      {t('Paymentdetail')}
                    </Typography>
                    <React.Fragment>
                <Grid container spacing={7} marginTop={1} >
                  <Grid item xs={12} sm={12}>
                    <Typography>
                      {t('Tourname')}: {data.tourname}
                    </Typography>
                    <Typography>
                      {t('Bookername')}: {data.user_name_booking} {data.user_surname_booking}
                    </Typography>
                    <Typography>
                      {t('Price')}: {data.tourprice}
                    </Typography>
                  </Grid>  
              </Grid>
            </React.Fragment>
            </Paper>
            </Container>
                </Box>
            </Grid>
            <Container component="main" maxWidth="sm" sx={{ mb: 4 }} >
              <Grid item xs={12} lg={6} marginTop={10} justify='Left' marginLeft={3} >
                  <Box>        
                    <img width='370' height='300' img src ='https://scontent.fbkk10-1.fna.fbcdn.net/v/t1.15752-9/275626048_514390190194116_8801950926904923197_n.png?_nc_cat=101&ccb=1-5&_nc_sid=ae9488&_nc_eui2=AeEAaR44aQZu3rRoqH_9xF8vm4VVNovAafubhVU2i8Bp--Rao1Dc9L6q_0MAVYHoyH7Nof2xnedSln3CyK6l9POZ&_nc_ohc=t4nq18ELJRYAX_1ROYl&_nc_ht=scontent.fbkk10-1.fna&oh=03_AVLjk7ejdQ6NLLKVrIIaIlsiutnKeJ7SiFvLqc6_P-LXhQ&oe=625A4CDC'/>                     
                  </Box>
                  <Typography variant="h6" gutterBottom align='left' marginTop={2} marginLeft={5} color='red' >
                    {t('Plscheck')}
                </Typography>
                <Link to={`/${props.uid}/${props.id}/billinform/${props.lang}`} style={{ textDecoration: 'none' }}>
                <Stack spacing={1}>
                    <Button variant="contained"
                    href='/billinform/:lang'
                    size="large" >
                      {t('Payment')}
                      </Button>
                </Stack>
                </Link>
              </Grid>
            </Container>
        </Grid>
    );
}

export default Paymentinfo;

