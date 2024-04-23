import * as React from 'react';
import { Box, Container, Paper, TextField, Typography, Grid, Button} from '@mui/material';
import { useState } from 'react';
import axios from "axios";
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import config from "../../config";
import { useAuth } from '../../auth';

function LoginPage(props) {
    const { t, i18n } = useTranslation();
    
    let auth = useAuth();

    let navigate = useNavigate();
    //const delay = ms => new Promise(res => setTimeout(res, ms));

    const [Username, setUsername] = useState("")
    const inputUsername = (event) =>{
        setUsername(event.target.value)
    }

    const [Password, setPassword] = useState("")
    const inputPassword = (event)=>{
        setPassword(event.target.value)
    }

    const [Id, setId] = useState(0)

    const Login = async () => {
        let formField = new FormData()
        formField.append('adminuser', Username)
        formField.append('adminpassword', Password)

        await axios({
            method: 'post',
            url:`${config.apiUrlPrefix}/adminlogin/`,
            data: formField
        }).then(response=>{
            if (response.data != 0)
            {
                setId(response.data);
                console.log(response.data)
                navigate("/AdminHome/th/")
            }
        }).catch(function (error) {
            console.log("FromAdmin")
            UserLogin()
          })
    }

    const UserLogin = async () => {
        let formField = new FormData()
        formField.append('username', Username)
        formField.append('password', Password)

        await axios({
            method: 'post',
            url:`${config.apiUrlPrefix}/userlogin/`,
            data: formField
        }).then(response=>{
            if (response.data != 0)
            {
                setId(response.data)
                console.log(response.data) //id
                navigate(`/${response.data}/alhome/th/`)
            }
        }).catch(function (error) {
            console.log("ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง");
          })
    }

    // function handleClickLogin(){
        
    // }
    

    return(
        <Box marginTop={20}>
            <Container maxWidth='sm' sx={{ mb: 1}}>
                <Paper variant='outlined' sx={{ my: { xs: 1, md: 5 }, p: { xs: 2, md: 3 }, margin: 3 }}>
                    <Typography sx = {{ margin: 2 }} component="h1" variant="h4" align="center">
                        {t('Login')}
                    </Typography>
                    <React.Fragment>
                        <Grid container spacing={3}>
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
                                    id='password'
                                    name='password'
                                    label={t('Password')}
                                    onChange={inputPassword}
                                    fullWidth
                                />
                            </Grid>
                            <Grid sx={{ mt: 3 }} container justify='space-between' style={{
                                    textAlign:'center' // this does the magic
                                    }}>
                                    <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
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
                                    onClick={Login}
                                    >{t('Login')}</Button>
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

export default LoginPage;