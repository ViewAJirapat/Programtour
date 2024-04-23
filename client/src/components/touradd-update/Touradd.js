import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Button, Grid, Stack, Table, TextField } from '@mui/material';
import { useState, useEffect } from 'react';
import { FormControl, MenuItem, Select } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import config from "../../config";

const theme = createTheme();

function AddTourDetail(props){
  const { t, i18n } = useTranslation();

  let navigate = useNavigate();

    const [tourcategory, setTourcategory] = React.useState('');

    const handleChangeCategpry = (event) => {
        setTourcategory(event.target.value);
    };

  const [ TourId, setTourId ] = useState("")
  const inputTourId = (event) =>{
    setTourId(event.target.value)
  }

  const [ TourName, setTourName ] = useState("")
  const inputTourName = (event) =>{
    setTourName(event.target.value)
  }

  const [ TourDetail, setTourDetail ] = useState("")
  const inputTourDetail = (event) =>{
    setTourDetail(event.target.value)
  }

  const [ Travelplan, setTravelplan ] = useState("")
  const inputTravelplan = (event) =>{
    setTravelplan(event.target.value)
  }

  const [ InPackage, setInPackage ] = useState("")
  const inputInPackage = (event) =>{
    setInPackage(event.target.value)
  }

  const [ NotInPackage, setNotInPackage] = useState("")
  const inputNotInInPackage = (event) =>{
    setNotInPackage(event.target.value)
  }

  const [ TourPolicy, setTourPolicy] = useState("")
  const inputTourPolicy = (event) =>{
    setTourPolicy(event.target.value)
  }

  const [ TourPrice, setTourPrice ] = useState(0)
  const inputTourPrice = (event) =>{
    setTourPrice(event.target.value)
  }

  const [images, setImages] = useState([]);
  const [imageURLs, setImageURLs] = useState([]);

  useEffect(() => {
    if (images.length < 1) return;
    const newImageUrls = [];
    images.forEach(image => newImageUrls.push(URL.createObjectURL(image)));
    setImageURLs(newImageUrls);
  }, [images]);
  
  function onImageChange(e){
    setImages([...e.target.files]);
  }

  const [images2, setImages2] = useState([]);
  const [image2URLs, setImage2URLs] = useState([]);

  useEffect(() => {
    if (images2.length < 1) return;
    const newImage2Urls = [];
    images2.forEach(image2 => newImage2Urls.push(URL.createObjectURL(image2)));
    setImage2URLs(newImage2Urls);
  }, [images2]);
  
  function onImage2Change(e){
    setImages2([...e.target.files]);
  }
  console.log("Images : ", images[0]);
  console.log("imageURLs : ", imageURLs);

  console.log("Images2 : ", images2);
  console.log("image2URLs : ", image2URLs);

  const addTour = async () => {
    let formField = new FormData()
    formField.append('tourid', TourId)
    formField.append('tourcategory', tourcategory)
    formField.append('tourname', TourName)
    formField.append('tourdetail', TourDetail)
    formField.append('travelplan', Travelplan)
    formField.append('tourinpackage', InPackage)
    formField.append('tournotinpackage', NotInPackage)
    formField.append('tourpolicy', TourPolicy)
    formField.append('tourprice', TourPrice)
    formField.append('tourimage1', images[0])
    formField.append('tourimage2', images2[0])
    console.log(formField.data)

    await axios({
      method: 'post',
      url:`${config.apiUrlPrefix}/addtourdetail/`,
      data: formField
    }).then(response=>{
      console.log(response.data);
      navigate("/AdminHome/th/")

    }, (error) => {
      console.log(error);
    });
  }

    return(
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
        <Typography sx = {{ margin: 2 }} component="h1" variant="h4" align="center">
          {t('Addtourdetail')}
        </Typography>
          <React.Fragment>
      <Grid container spacing={7}>
        <Grid item xs={12} sm={12}>
          <TextField
            required
            id="tourid"
            name="tourid"
            label={t('Tourid')}
            onChange={inputTourId}
            fullWidth        
          />
        </Grid>
        <Grid item xs={12} sm={12}>
            <Select
                labelId="category-select-label"
                id='tourcategory'
                value={tourcategory}
                onChange={handleChangeCategpry}
                displayEmpty
                fullWidth 
                >
                    <MenuItem value="">
                        <em>{t('Category')}</em>
                    </MenuItem>
                    <MenuItem value="Promotion">{t('Promotion')}</MenuItem>
                    <MenuItem value="OneDayTrip">{t('1DayTrip')}</MenuItem>
                    <MenuItem value="WithHostel">{t('Tourwithotel')}</MenuItem>
            </Select>
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            required
            id="tourname"
            name="tourname"
            label={t('Tourname')}
            onChange={inputTourName}
            fullWidth           
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            required
            id="tourdetail"
            name="tourdetail"
            label={t('Tourdetail')}
            onChange={inputTourDetail}
            rows={4}
            fullWidth        
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            required
            id="travelplan"
            name="travelplan"
            label={t('Tourdescription')}
            onChange={inputTravelplan}
            multiline
            rows={4}
            fullWidth        
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            required
            id="toursinpackage"
            name="toursinpackage"
            label={t('Inservice')}
            onChange={inputInPackage}
            multiline
            rows={4}
            fullWidth        
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            required
            id="toursnotinpackage"
            name="toursnotinpackage"
            label={t('Extraservice')}
            onChange={inputNotInInPackage}
            multiline
            rows={4}
            fullWidth        
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            required
            id="tourpolicy"
            name="tourpolicy"
            label={t('Refund_rotation_detail')}
            onChange={inputTourPolicy}
            multiline
            rows={4}
            fullWidth        
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            required
            id="tourprice"
            name="tourprice"
            label={t('Price')}
            onChange={inputTourPrice}
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
            {t('Firstimage')}
          </Typography>
          <div>
            <input type="file" multiple accept='image/*' onChange={onImageChange}/>
              {imageURLs.map((imageSrc, idx) => (
              <img width='500' height='360' src={imageSrc} />
            ))}
          </div>
        </Paper>

        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography variant="h5" gutterBottom align='left'>
            {t('Secondimage')}
          </Typography>
          <div>
            <input type="file" multiple accept='image/*' onChange={onImage2Change}/>
              {image2URLs.map((imageSrc, idx) => (
              <img width='500' height='360' src={imageSrc} />
            ))}
          </div>
        </Paper>
        </Container>
        <Grid sx={{ mt: 3, mb: 3 }} container justify='center' style={{
                      textAlign:'center' // this does the magic
                  }}>
                <Grid item xl={8} lg={6} md={6} sm={6} xs={6}>
                    <Button 
                      sx = {{ 
                        '&:hover': 
                            { color: '#1565c0',
                        backgroundColor: '#fefefe'},
                        border:1,
                        borderColor: '#1565c0'
                      }}
                        variant="contained"
                        onClick={addTour}
                        //href="/AdminHome/th"
                        >
                          {t('Confirm')}
                </Button>
                </Grid>

                <Grid item xl={0.2} lg={6} md={6} sm={6} xs={6}>
                <Button 
                  sx = {{ 
                    '&:hover': 
                        {color: 'red',
                        backgroundColor: '#fefefe'},
                  color: 'white',
                  backgroundColor: 'red',
                  border:1,
                  borderColor: 'red' }}
                  href="/AdminHome/th"
                  align="center" variant="contained">{t('Cancel')}</Button>
                </Grid>     
        </Grid>
    </ThemeProvider>
    )
}

export default AddTourDetail;