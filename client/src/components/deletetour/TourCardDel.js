import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, Grid } from '@mui/material';
import { Box } from '@mui/system';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";


export default function TourCardDel(props) {
  const { t, i18n } = useTranslation();

  let navigate = useNavigate();
 
  function handleGetIdpage(){
    props.handleGetIdpage(props.TourDetail.id)
  }



  
  
  return (
    console.log(props.TourDetail),
    <Card  marginBottom={10} sx={{ maxWidth: 'fullwidth', margin: '5' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={props.TourDetail.tourimage1}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.TourDetail.tourname}
          </Typography>
            <Typography variant="body2" color="text.secondary" align="right">
                {props.TourDetail.tourprice}
            </Typography>
        </CardContent>
        <Box display="flex" justifyContent="right" marginBottom={2} marginRight={2}>
          <Button 
                      sx = {{ 
                        '&:hover': 
                            {color: 'red',
                            backgroundColor: '#fefefe'},
                      color: 'white',
                      backgroundColor: 'red',
                      border:1,
                      borderColor: 'red', 
                      marginRight:2}}
                     size="small" 
                     variant="contained" 
                     href={`/${props.TourDetail.id}/TourUpdate/th/`}
                     >
                      {t('Edit')}
            </Button>

            <Button 
                      sx = {{ 
                        '&:hover': 
                            {color: 'red',
                            backgroundColor: '#fefefe'},
                      color: 'white',
                      backgroundColor: 'red',
                      border:1,
                      borderColor: 'red' }}
                      onClick={handleGetIdpage}
                      size="small" variant="contained"
                      >
                          {t('Delete')}
            </Button>
          
          </Box>

          
      </CardActionArea>
    </Card>
    
  );
}