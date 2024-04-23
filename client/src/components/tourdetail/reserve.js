import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import Confirm from './confirm';
import { useTranslation } from 'react-i18next';


export default function ReservePopup(props) {
  const { t, i18n } = useTranslation();

  const [popup, setPopup] = useState(false);

  const [BookingDetail2, setBookingDetail2] = useState([]);

    const handleOpenPopup = () => {
      handleGetDetail();
        setPopup(true);
    };

    const handleClosePopup = () => {
        setPopup(false);
    };

    // const handleGetDetail2 =(BookingDetail2) => {
    //   setBookingDetail2(BookingDetail2)
    //   console.log(BookingDetail2)
    // };

    function handleGetDetail(){
      props.handleGetDetail(BookingDetail2)
    };

    const [Daytobook, setDaytobook] = useState("")
    const inputDaytobook = (event) =>{
      setDaytobook(event.target.value)
    }

    const [AdultCount, setAdultCount] = useState("")
    const inputAdultCount = (event) =>{
      setAdultCount(event.target.value)
    }

    const [ChildCount, setChildCount] = useState("")
    const inputChildCount = (event) =>{
      setChildCount(event.target.value)
    }

  return (
    console.log(props.uid),
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
          <Box className='box'
    component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <Typography>{t('Daytobook')}</Typography>
      <TextField id="outlined-basic"  variant="outlined" onChange={inputDaytobook} />

      <Typography>{t('Adult')}</Typography>
      <TextField id="outlined-basic"  variant="outlined" onChange={inputAdultCount} />

      <Typography>{t('Child')}</Typography>
      <TextField id="outlined-basic"  variant="outlined" onChange={inputChildCount} />
      
    </Box>
        </DialogContent>
        
        <Box display="flex" justifyContent="center" marginBottom={2}>
                <Button 
                 sx = {{ 
                  '&:hover': 
                      {color: '#1565c0',
                  backgroundColor: '#fefefe'},
                  border:1,
                  borderColor: '#1565c0'
                }}
                align="center" variant="contained" 
                onClick={handleOpenPopup}
                >
                  {t('Book')}</Button>
                <Confirm handleClosePopup={handleClosePopup} popup={popup} Daytobook={Daytobook} AdultCount={AdultCount} ChildCount={ChildCount} uid={props.uid} id={props.id} lang={props.lang}/>
        </Box>
          
      </Dialog>
    </div>
  );
}