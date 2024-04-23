import { Box } from "@mui/material";
import AfHomeBar from "../components/home/AflogHomeBar";
import MainContent from "../components/home/MainContent";
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';



function AfHome(){
    const { uid, lang } = useParams();
    const { t, i18n } = useTranslation();
    i18n.changeLanguage(lang)
    return(
        <Box sx={{ minWidth:400, flexGrow: 1 }}>
            <AfHomeBar uid={uid} lang={lang}/>
            <MainContent uid={uid} lang={lang}/>
        </Box>
    );
}

export default AfHome;