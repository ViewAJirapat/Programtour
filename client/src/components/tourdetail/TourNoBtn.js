import './Tour.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ReservePopup from './reserve';
import axios from "axios";
import { useTranslation } from 'react-i18next';
import config from "../../config";


export default function Tour(props) {
  const { t, i18n } = useTranslation();
  const [popup, setPopup] = useState(false);

    const [data, setData] = useState([])
    useEffect(() => {
        BookingGet()
    }, [])

    const BookingGet = async () => {
        let result = await axios.get(`${config.apiUrlPrefix}/api/v1/tourdetail/${props.id}/`)
        setData(result.data)
        console.log(result.data)
    }  
  return (
    //console.log(props.uid),
    <Container maxWidth="md">
    <Card maxWidth="lg">
        <CardActionArea>
        
          <CardMedia
            component="img"
            height="200"
            width="200"
            image={data.tourimage1}
          />
              <CardContent>
                <Typography variant="h6" color="text.secondary">{t('Tourdescription')}</Typography>
                <Typography variant="body2" color="text.secondary">{data.travelplan}</Typography>
              </CardContent>

          <CardMedia
            component="img"
            height="200"
            width="200"
            image={data.tourimage2}
          />
            <CardContent>
              <Typography variant="h6" color="text.secondary">{t('Inservice')}</Typography>
              <Typography variant="body2" color="text.secondary">{data.tourinpackage}</Typography>

              <Typography variant="h6" color="text.secondary">{t('Extraservice')}</Typography>
              <Typography variant="body2" color="text.secondary">{data.tournotinpackage}</Typography>
            </CardContent>

            <CardContent>
            <Typography variant="h6" color="text.secondary">{t('Tourdetail')}</Typography>

            <Typography variant="body2" color="text.secondary">{data.tourdetail}</Typography>

            <Typography variant="h6" color="text.secondary">{t('Refund_rotation_detail')}</Typography>

            <Typography variant="body2" color="text.secondary">{data.tourpolicy}</Typography>
            </CardContent>
                     
        </CardActionArea>

        <CardContent>
            <Typography variant="h6" color="red" marginRight={10}>
              {t('Firstprice')} {data.tourprice} {t('Bath')}
            </Typography>

        </CardContent>

    </Card>
                    
  </Container>
                   
   )}  
