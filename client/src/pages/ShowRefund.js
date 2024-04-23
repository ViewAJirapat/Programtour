import Box from '@mui/material/Box';
import ShowBar from '../components/showrefund-request/showbar';
import Showrefund from '../components/showrefund-request/Showrefund';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';



function ShowRefund(){
    const { lang } = useParams();
    const { t, i18n } = useTranslation();
    i18n.changeLanguage(lang)
    return(
        <Box sx={{ flexGrow: 1}}>
            <ShowBar lang={lang}/>
            <Showrefund lang={lang}/>
        </Box>
    );
}

export default ShowRefund;