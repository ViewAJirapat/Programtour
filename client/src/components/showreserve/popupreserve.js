import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { CardMedia, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';


export default function Popupreserve(props) {
  const { t, i18n } = useTranslation();

  const [popup, setPopup] = useState(false);
  console.log(props.info.slippaymentimage)

    const handleOpenPopup = () => {
        setPopup(true);
    };

    const handleClosePopup = () => {
        setPopup(false);
    };
  return (
    <div>
      <Dialog
        open= {props.popup}
        onClose={props.handleClosePopup}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description" variant="h6" textAlign="center">
            {t('Bookingdetail')}
          </DialogContentText>
          <Box>
            <CardMedia
                    component="img"  
                    // height="450"
                    // width="500"
                    image={props.info.slippaymentimage}
            />                                       
          </Box>
        </DialogContent>
        
        <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
        <Button 
                  sx = {{ 
                    '&:hover': 
                        {color: '#1565c0',
                    backgroundColor: '#fefefe'},
                    border:1,
                    borderColor: '#1565c0',
                    marginRight:2
                  }}
                  align="center" variant="contained" onClick={props.handleClosePopup}>{t('OK')}</Button>
                  
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
      </Dialog>
    </div>
  );
}