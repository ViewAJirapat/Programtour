import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useNavigate, Link } from "react-router-dom";

export default function Tourcard(props) {

  return (
    console.log(props),
    <Link to = {`/${props.TourDetail.id}/tourdetail/:lang`} style={{ textDecoration: 'none' }}>
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
      </CardActionArea>
    </Card>
    </Link>
  );
}