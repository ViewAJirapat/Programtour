import { Box } from "@mui/material";
import Adminhomebar from "../components/adminhome/Adminhomebar";
import Content from "../components/adminhome/Content";
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function AdminHome(){
    const { lang } = useParams();
    const { t, i18n } = useTranslation();
    i18n.changeLanguage(lang)
    return(
        <Box sx={{ minWidth:400, flexGrow: 1 }}>
            <Adminhomebar lang={lang}/>
            <Content lang={lang}/>
        </Box>
    );
}

export default AdminHome;