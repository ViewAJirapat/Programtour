import * as React from 'react';
import './StatusAppBar.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { FormControl, InputLabel, MenuItem, Select, Menu } from '@mui/material';
import logo from './pic/logo.png';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { useTranslation } from 'react-i18next';

export default function StatusAppBar(props) {
    const { t, i18n } = useTranslation();
    const [Lang, setLang] = React.useState('');

    const handleChange = (event) => {
        setLang(event.target.value);
    };

    const [anchorEl, setAnchorEl] = React.useState(null); 

    const handleOpenMenu = (event) => { 
        setAnchorEl(event.currentTarget);
    };

    const handleCloseMenu = () => {
        setAnchorEl(null);
    };

    const handleChangeLang = (lang) => {
        window.location.href = `/${props.uid}/RefundStatus/${lang}`
    };

    return (
        <Box >
        <AppBar position="static">
            <Toolbar>
                <img className='logo' src={logo} alt="logo"/>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    {/* <img className='logo' src={logo} alt="logo"/> */}
                    {/* <MenuIcon /> */}
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
                    {t('Refundstatus')}
                </Typography>
                <Box sx={{ minWidth: 250 }} padding = "20">
                    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                        <InputLabel id="demo-simple-select-label">{t('Language')}</InputLabel>
                        <Select
                            sx = {{ backgroundColor: 'white' }}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value = {Lang}
                            label = "Language"
                            onChange={handleChange}
                        >
                            <MenuItem value='ไทย' onClick={() => handleChangeLang('th')}>ไทย</MenuItem>
                            <MenuItem value='Eng' onClick={() => handleChangeLang('en')}>Eng</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <IconButton
                     sx = {{ maxWidth: 150, minWidth: 50 }}
                     size="large"
                     aria-label="account of current user"
                     aria-controls="menu-appbar"
                     aria-haspopup="true"
                     color="inherit" 
                     onClick={handleOpenMenu} 
                    >
                        <MenuIcon/>
                        <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl} 
                        anchorOrigin={{ 
                            vertical:'center',
                            horizontal:'right', 
                        }}
                        keepMounted
                        transformOrigin={{ 
                            vertical:'top', 
                            horizontal:'right', 
                        }}
                        open={Boolean(anchorEl)} 
                        onClose={handleCloseMenu} 
                        >
                           <Box>
                                <Link to={`/${props.uid}/alhome/${props.lang}`} style={{ textDecoration: 'none' }}>
                                <MenuItem 
                                onClick={handleCloseMenu}
                                sx = {{ 
                                    border: 1,
                                    color: 'white',
                                    bgcolor: '#33ADFF',
                                }}
                                >{t('Home')}</MenuItem>
                                </Link>

                                <Link to={`/${props.uid}/tourcheck/${props.lang}`} style={{ textDecoration: 'none' }}>
                                <MenuItem onClick={handleCloseMenu}
                                    sx = {{ 
                                        border: 1,
                                        color: 'white',
                                        bgcolor: '#33ADFF',
                                    }}
                                >{t('Bookingresult')}</MenuItem>
                                </Link>

                                <Link to={`/home/${props.lang}`} style={{ textDecoration: 'none' }}>
                                <MenuItem onClick={handleCloseMenu}
                                    sx = {{ 
                                        border: 1,
                                        color: 'white',
                                        bgcolor: '#33ADFF',
                                    }}
                                >{t('Logout')}</MenuItem>
                                </Link>      
                            </Box>
                        </Menu>
                    </IconButton>
            </Toolbar>
        </AppBar>
        </Box>
    );
}