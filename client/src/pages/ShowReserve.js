import Box from '@mui/material/Box';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ShowReaserveBar from '../components/showreserve/ShowReserveBar';
import Showrereserve from '../components/showreserve/Showreserve';



function ShowreReserve(){
    const { lang } = useParams();
    const { t, i18n } = useTranslation();
    i18n.changeLanguage(lang)
    return(
        <Box sx={{ flexGrow: 1}}>
            <ShowReaserveBar lang={lang}/>
            <Showrereserve lang={lang}/>
        </Box>
    );
}

export default ShowreReserve;