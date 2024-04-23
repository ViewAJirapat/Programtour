import { CardMedia } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { Box } from '@mui/system';
//import slip from './pic/slip.png';
import React, { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import axios from "axios";
import config from "../../config";



export default function Popupstatus(props) {
  const { t, i18n } = useTranslation();
  const [status, setSatatus] = useState([]);

  useEffect(() => {
    BookingGet()
}, [])

const BookingGet = async () => {
    let result = await axios.get(`${config.apiUrlPrefix}/api/v1/userbooking/${props.id}/`)
    setSatatus(result.data)
    console.log(result.data)
}

  // useEffect( () => {
  //   fetch(`http://127.0.0.1:8000/api/v1/userbooking/${props.id}/`)
  //     .then(response => response.json())
  //     .then(status => setSatatus(status))
  //     console.log(status)
  // }, [])

  return (
    console.log(props.id),
    <div>
      <Dialog
        open= {props.popup}
        onClose={props.handleClosePopup}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description" variant="h6" textAlign="center">
            {t('Refundevidence')}
          </DialogContentText>

          <Box>
            <CardMedia
                    component="img"  
                    height="450"
                    width="500"
                    image={status.refundslipimage}
            />                                       
          </Box>
            <Box display="flex" justifyContent="center">
                <Button 
                  sx = {{ 
                    '&:hover': 
                        {color: '#1565c0',
                    backgroundColor: '#fefefe'},
                    border:1,
                    borderColor: '#1565c0'
                  }}
                  align="center" variant="contained" onClick={props.handleClosePopup}>{t('OK')}</Button>
            </Box>
        </DialogContent>
        
      </Dialog>
      </div>                     
         
  );
}