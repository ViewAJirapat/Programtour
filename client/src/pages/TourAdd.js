import AddTourAppBar from "../components/touradd-update/addTourAppBar";
import Touradd from "../components/touradd-update/Touradd";
import Box from '@mui/material/Box';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function TourAdd(){
    const { lang } = useParams();
    const { t, i18n } = useTranslation();
    i18n.changeLanguage(lang)

    return(
        <Box sx={{ flexGrow: 1 }}>
            <AddTourAppBar lang={lang}/>
            <Touradd lang={lang}/>
        </Box>
    );
}

export default TourAdd;