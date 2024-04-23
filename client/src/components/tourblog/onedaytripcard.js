import * as React from 'react';
import Box from '@mui/material/Box';
//import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
//import Card from '@mui/material/Card';
//import CardActions from '@mui/material/CardActions';
//import CardContent from '@mui/material/CardContent';
//import CardMedia from '@mui/material/CardMedia';
//import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from "@mui/material/Stack";
//import { useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from "axios";
import Tourcard from '../home/TourCard';
import { useTranslation } from 'react-i18next';
import config from "../../config";

function OneDayTrip(props) {
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
        <Box>
            <Typography fontSize={20} varient="h6" margin={2} padding={2} align="center" backgroundColor="blue" color="white">
                {t('1DayTrip')}
            </Typography>
            <Grid container>
                <Grid item xs={12} lg={12} marginTop={2} display="flex" justifyContent="center">
                    <Stack spacing={2} margin={2}>
                        {toursData.filter(tourselected => tourselected.tourcategory === "OneDayTrip").map(r => <Tourcard TourDetail={r} />)}
                    </Stack>
                </Grid>
            </Grid >
        </Box>
    );
}
export default OneDayTrip;