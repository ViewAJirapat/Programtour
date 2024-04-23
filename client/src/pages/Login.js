import { Box } from "@mui/material";
import LoginAppBar from "../components/login/LoginAppBar";
import MainLogin from "../components/login/mainLogin";
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';



function Login(){
    const { lang } = useParams();
    const { t, i18n } = useTranslation();
    i18n.changeLanguage(lang)
    return(
        <Box sx={{ minWidth:400, flexGrow: 1 }}>
            <LoginAppBar lang={lang}/>
            <MainLogin lang={lang}/>
        </Box>
    );
}

export default Login;