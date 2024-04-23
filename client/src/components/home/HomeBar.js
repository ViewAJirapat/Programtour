import * as React from 'react';
import './HomeAppBar.css';
import AppBar from '@mui/material/AppBar';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
import { Button, FormControl, InputLabel, MenuItem, Select, Stack} from '@mui/material';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { useTranslation } from 'react-i18next';

// import MenuIcon from 'material-ui-icons/Menu';
import logo from './pic/logo.png';
import { Link } from 'react-router-dom';

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

export default function HomeBar(props) {
    const { t, i18n } = useTranslation();
    const [Lang, setLang] = React.useState('');

    const handleChange = (event) => {
        setLang(event.target.value);
    };

    const handleChangeLang = (lang) => {
        window.location.href = `/home/${lang}`
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{ top: 0 , left : 0,  margin: 0}}>
            <Toolbar>
                <img className='logo' src={logo} alt="logo"/>
                <Typography marginLeft={2} variant="h6" component="div" sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
                    {t('Teawkanmai')}
                </Typography>
                <Box justifyContent="center" sx={{ minWidth: 200, maxWidth:300 }} padding = "10" margin={1}>
                    <FormControl sx={{ m: 1, maxWidth: 150, minWidth: 100, height: 50 }} size="small">
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
                    <Search sx={{ minWidth: 120, maxWidth:200 }}>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder={t('Search')}
                        inputProps={{ 'aria-label': 'search' }}
                        />
                </Search>
                </Box>
                    <Box sx={{ maxWidth: 120}}>
                <Stack spacing={1} marginRight={3} marginLeft={2}>
                    <Link to={`/login/${props.lang}`} style={{ textDecoration: 'none' }}>
                    <Button style={{ maxHeight: '40px', minWidth: '30px', minHeight: '30px', maxWidth: '30'}} 
                    sx={{ 
                        '&:hover': 
                            {color: 'blue',
                        backgroundColor: '#fefefe'},
                        color:'white', backgroundColor:'blue', height:'10' }} varient='contained'
                        >
                        {t('Login')}
                    </Button>
                    </Link>
                    <Link to={`/register/${props.lang}`} style={{ textDecoration: 'none' }}>
                    <Button style={{ maxHeight: '40px', minWidth: '30px', minHeight: '30px'}} 
                    sx={{ 
                        '&:hover': 
                            {color: 'blue',
                        backgroundColor: '#fefefe'},
                        color:'white', backgroundColor:'blue', height:'10' }} varient='contained'
                        >
                        {t('Register')}
                    </Button>
                    </Link>
                </Stack>
                </Box>
            </Toolbar>
        </AppBar>
        </Box>
    );
}