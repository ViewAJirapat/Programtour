import TestPages from "../components/Testpage/tourtest";
import Box from '@mui/material/Box';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


function Ftestpages(){
    const { lang } = useParams();
    const { t, i18n } = useTranslation();
    i18n.changeLanguage(lang)
    return(
        <Box sx={{ flexGrow: 1 }}>
            <TestPages/>
        </Box>
    );
}

export default Ftestpages;