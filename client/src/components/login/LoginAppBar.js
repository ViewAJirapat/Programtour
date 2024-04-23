import * as React from 'react';
import './LoginAppBar.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { FormControl, InputLabel, MenuItem, Select} from '@mui/material';
import logo from './pic/logo.png';
import { useTranslation } from 'react-i18next';


// const useStyles = makeStyles({
//     lang: {
//         fontSize: '20',
//         backgroundColor: 'blue'
//     },
//     apptoolbar: {
//         marginBottom: '20',
//         padding: '20',
//     }
// })

export default function LoginAppBar() {
    const { t, i18n } = useTranslation();
    const [Lang, setLang] = React.useState('');

    const handleChange = (event) => {
        setLang(event.target.value);
    };

    const handleChangeLang = (lang) => {
        window.location.href = `/login/${lang}`
    };

    return (
        <Box sx={{ flexGrow: 1, width:"100%" }} >
        <AppBar style={{ margin: 0 }}>
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
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    {t('Login')}
                </Typography>
                <Box sx={{ minWidth: 250 }} padding = "20">
                    <FormControl sx={{ m: 1, minWidth: 120 }}>
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
            </Toolbar>
        </AppBar>
        </Box>
    );
}