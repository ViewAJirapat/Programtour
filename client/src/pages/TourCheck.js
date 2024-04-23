import TourAppBar from "../components/tourcheck/TourAppBar";
import BookingTable from "../components/tourcheck/BookingTable";
import Box from '@mui/material/Box';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function TourCheck(){
    const { uid, lang } = useParams();
    const { t, i18n } = useTranslation();
    i18n.changeLanguage(lang)
    return(
        <Box sx={{ flexGrow: 1 }}>
            <TourAppBar uid={uid} lang={lang}/>
            <BookingTable uid={uid} lang={lang}/>
        </Box>
    );
}

export default TourCheck;
    
