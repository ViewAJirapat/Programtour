import * as React from 'react';
import './DeleteBar.css';
import AppBar from '@mui/material/AppBar';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { FormControl, InputLabel, MenuItem, Select, Menu} from '@mui/material';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';

import logo from './pic/logo.png';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


const Search = styled('div')(({ theme }) => ({


    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    border: '20',
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));
  
const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
}));

export default function DeleteBar(props) {
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
        window.location.href = `/DeleteTour/${lang}`
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{ top: 0 , left : 0,  margin: 0}}>
            <Toolbar>
                <img className='logo' src={logo} alt="logo"/>
                <Typography marginLeft={2} variant="h6" component="div" sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
                    {t('Teawkanimai')}
                </Typography>
                <Search sx={{ minWidth: 120 }}>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search"
                        inputProps={{ 'aria-label': 'search' }}
                        />
                </Search>
                <Box sx={{ minWidth: 250 }} padding = "10" marginLeft={2}>
                    <FormControl sx={{ m: 1, maxWidth: 150, minWidth: 100 }}>
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
                    <IconButton
                     sx = {{ m: 1, maxWidth: 150, minWidth: 100 }}
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
                            <Link to={`/AdminHome/${props.lang}/`} style={{ textDecoration: 'none' }}>
                                <MenuItem 
                                onClick={handleCloseMenu}
                                sx = {{ 
                                    border: 1,
                                    color: 'white',
                                    bgcolor: '#33ADFF',
                                }}
                                >{t('Home')}</MenuItem>
                                </Link>

                                <Link to={`/ShowReserve/${props.lang}/`} style={{ textDecoration: 'none' }}>
                                <MenuItem onClick={handleCloseMenu}
                                    sx = {{ 
                                        border: 1,
                                        color: 'white',
                                        bgcolor: '#33ADFF',
                                    }}
                                >{t('Customerdetail')}</MenuItem>
                                </Link>

                                <Link to={`/touradd/${props.lang}/`} style={{ textDecoration: 'none' }}>
                                <MenuItem onClick={handleCloseMenu}
                                    sx = {{ 
                                        border: 1,
                                        color: 'white',
                                        bgcolor: '#33ADFF',
                                    }}
                                >{t('Addprogramtour')}</MenuItem>
                                </Link>

                                <Link to={`/ShowRefund/${props.lang}/`} style={{ textDecoration: 'none' }}>
                                <MenuItem onClick={handleCloseMenu}
                                    sx = {{ 
                                        border: 1,
                                        color: 'white',
                                        bgcolor: '#33ADFF',
                                    }}
                                >{t('Checkrefundrequest')}</MenuItem>
                                </Link>
                                <Link to={`/home/${props.lang}/`} style={{ textDecoration: 'none' }}>
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
                </Box>
            </Toolbar>
        </AppBar>
        </Box>
    );
}