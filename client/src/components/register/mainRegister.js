import * as React from 'react';
import { Box, Container, Paper, TextField, Typography, Grid, Button} from '@mui/material';
import {useState, Component} from 'react';
import axios from "axios";
//import { withStyles } from '@mui/styles';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import config from "../../config";


function RegisterPage(props) {
    const { t, i18n } = useTranslation();

    const [Name, setName] = useState("")
    const inputNameUser = (event)=>{
        setName(event.target.value)
    }

    const [Surname, setSurname] = useState("")
    const inputSurnameUser = (event)=>{
        setSurname(event.target.value)
    }

    const [Email, setEmail] = useState("")
    const inputUserEmail = (event)=>{
        setEmail(event.target.value)
    }

    const [PhoneNumber, setPhoneNumber] = useState("")
    const inputPhoneNumber = (event)=>{
        setPhoneNumber(event.target.value)
    }

    const [Username, setUsername] = useState("")
    const inputUsername = (event)=>{
        setUsername(event.target.value)
    }

    const [Password, setPassword] = useState("")
    const inputPassword = (event)=>{
        setPassword(event.target.value)
    }

    const [ComfirmPassword, setConfirmPassword] = useState("")
    const inputConfirmPassword = (event)=>{
        setConfirmPassword(event.target.value)
    }

    const checkComfirmpassword = (event) =>{
        if (Password !== ComfirmPassword)
        {
            console.log("รหัสผ่านไม่ตรงกัน")
        }
        else
        {
            console.log("รหัสผ่านตรงกัน")
            setPassword(event.target.value)
            addUserInfo()
        }
    }

    const addUserInfo = async () => {
        let formField = new FormData()
        formField.append('username', Username)
        formField.append('password', Password)
        formField.append('user_name', Name)
        formField.append('user_surname', Surname)
        formField.append('user_email', Email)
        formField.append('user_phonenumber', PhoneNumber)
        console.log(formField.data)
    
        await axios({
          method: 'post',
          url:`${config.apiUrlPrefix}/api/v1/userinfo/`,
          data: formField
        }).then(response=>{
          console.log(response.data);
        }, (error) => {
          console.log(error);
        });
      }

    return(
        <Box marginTop={20}>
            <Container maxWidth='sm' sx={{ mb: 1}}>
                <Paper variant='outlined' sx={{ my: { xs: 1, md: 5 }, p: { xs: 2, md: 3 }, margin: 3 }}>
                    <Typography sx = {{ margin: 2 }} component="h1" variant="h4" align="center">
                        {t('Register')}
                    </Typography>
                    <React.Fragment>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={12}>
                                <TextField
                                    required
                                    id='name_user'
                                    name='name_user'
                                    label={t('Name')}
                                    onChange={inputNameUser}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <TextField
                                    required
                                    id='surname_user'
                                    name='surname_user'
                                    label={t('Surname')}
                                    onChange={inputSurnameUser}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <TextField
                                    required
                                    id='email'
                                    name='email'
                                    label={t('Email')}
                                    onChange={inputUserEmail}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <TextField
                                    required
                                    id='phone_number'
                                    name='phone_number'
                                    label={t('Phonenum')}
                                    onChange={inputPhoneNumber}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <TextField
                                    required
                                    id='username'
                                    name='username'
                                    label={t('Username')}
                                    onChange={inputUsername}
                                    fullWidth
                                />
                            </Grid>
                                <Grid item xs={12} sm={12}>
                                    <TextField
                                        required
                                        type="password"
                                        autoComplete="current-password"
                                        id='password'
                                        name='password'
                                        label={t('Password')}
                                        onChange={inputPassword}
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12} sm={12}>
                                    <TextField
                                        required
                                        type="password"
                                        autoComplete="current-password"
                                        id='conpassword'
                                        name='conpassword'
                                        label={t('Confirmpassword')}
                                        onChange={inputConfirmPassword}
                                        fullWidth
                                    />
                                </Grid>
                            <Grid sx={{ mt: 3 }} container justify='space-between' style={{
                                    textAlign:'center' // this does the magic
                                    }}>
                                    <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
                                    <Link to={`/home/${props.lang}`} style={{ textDecoration: 'none' }}>
                                    <Button 
                                    sx = {{ 
                                        '&:hover': 
                                            {color: '#1565c0',
                                            backgroundColor: '#fefefe'},
                                    color: 'white',
                                    backgroundColor: '#1565c0',
                                    border:1,
                                    borderColor: '1565c0' }}
                                    align="center" variant="contained"
                                    onClick={checkComfirmpassword}
                                    //href='/home'
                                    >{t('Confirm')}</Button>
                                    </Link>
                                </Grid>
                                <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
                                <Link to={`/home/${props.lang}`} style={{ textDecoration: 'none' }}>
                                    <Button 
                                        sx = {{ 
                                            '&:hover': 
                                                { color: 'red',
                                            backgroundColor: '#fefefe'},
                                            backgroundColor: 'red',
                                            border:1,
                                            borderColor: 'red'
                                        }}
                                            variant="contained"
                                    >
                                        {t('Cancel')}
                                    </Button>
                                    </Link>
                                </Grid>
                            </Grid>
                        </Grid>
                    </React.Fragment>
                </Paper>
            </Container>
        </Box>
    )
}

export default RegisterPage;