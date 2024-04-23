import { Box } from "@mui/material";
import HomeBar from "../components/home/HomeBar";
import MainContent from "../components/home/MainContentNonLogin2";
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';



function Home(){
    const { lang } = useParams();
    const { t, i18n } = useTranslation();
    i18n.changeLanguage(lang)
    return(
        <Box sx={{ minWidth:400, flexGrow: 1 }}>
            <HomeBar lang={lang}/>
            <MainContent lang={lang}/>
        </Box>
    );
}

export default Home;