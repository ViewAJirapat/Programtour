import Onedaytripcard from "../components/tourblog/onedaytripcard";
import { Box } from "@mui/material";
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import OnedaytripAppBar from "../components/tourblog/onedaytripAppBar";

function TourOnedaytrip() {
    const { uid, lang } = useParams();
    const { t, i18n } = useTranslation();
    i18n.changeLanguage(lang)
    return (
        <Box sx={{ minWidth: 400, flexGrow: 1 }}>
            <OnedaytripAppBar uid={uid} lang={lang}/>
            <Onedaytripcard uid={uid} lang={lang}/>            
        </Box>
    );
}

export default TourOnedaytrip;