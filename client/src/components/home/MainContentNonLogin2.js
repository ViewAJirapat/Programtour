import { Box, Grid, Stack, Typography } from "@mui/material";
import TourCardnonLogin from "./TourCardnonLogin";
import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useTranslation } from 'react-i18next';
//import { Link } from "react-router-dom";
import config from "../../config";


function MainContent(props){
    const { t, i18n } = useTranslation();

    const [toursData, setToursData] = useState([])

          useEffect(() => {
              TourdetailGet()
          }, [])
      
          const TourdetailGet = async () => {
              let result = await axios.get(`${config.apiUrlPrefix}/api/v1/tourdetail/`)
              setToursData(result.data)
          }
          
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} lg={6} marginTop={2} justify='center'>
                <Box>
                        <Typography fontSize={20} varient="h6" margin={2} padding={3} align="center" backgroundColor="blue" color="white">
                            {t('Promotion')}
                        </Typography>
                    <Stack spacing={2} margin={2}>
                        {toursData.filter(tourselected => tourselected.tourcategory === "Promotion").map(r => <TourCardnonLogin TourDetail={r} lang={props.lang}/>)}
                    </Stack>
                </Box>
            </Grid>
            <Grid item xs={12} lg={3} marginTop={2} justify='center'>
                <Box>
                        <Typography fontSize={20}  varient="h6" margin={2} padding={3} align="center" backgroundColor="blue" color="white">
                            {t('1DayTrip')}
                        </Typography>
                    <Stack spacing={2} margin={2}>
                        {toursData.filter(tourselected => tourselected.tourcategory === "OneDayTrip").map(r => <TourCardnonLogin TourDetail={r} lang={props.lang}/>)}
                    </Stack>
                </Box>
            </Grid>
            <Grid item xs={12} lg={3} marginTop={2} justify='center'>
                    <Typography fontSize={20}  varient="h6" margin={2} padding={3} align="center" backgroundColor="blue" color="white">
                        {t('Tourwithotel')}
                    </Typography>
                <Stack spacing={2} margin={2}>
                    {toursData.filter(tourselected => tourselected.tourcategory === "WithHostel").map(r => <TourCardnonLogin TourDetail={r} lang={props.lang}/>)}
                </Stack>
            </Grid>
        </Grid>
    );
    }
export default MainContent;