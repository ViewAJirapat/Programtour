import { Box } from "@mui/material";
import RegisterAppBar from "../components/register/RegisterAppBar";
import MainRegister from "../components/register/mainRegister";
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';



function Register(){
    const { lang } = useParams();
    const { t, i18n } = useTranslation();
    i18n.changeLanguage(lang)

    return(
        <Box sx={{ minWidth:400, flexGrow: 1 }}>
            <RegisterAppBar lang={lang}/>
            <MainRegister lang={lang}/>
        </Box>
    );
}

export default Register;