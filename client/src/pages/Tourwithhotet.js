import WithhotelAppBar from "../components/tourblog/withhotelAppBar";
import Withhotelpcard from "../components/tourblog/withhotelcard";
import { Box } from "@mui/material";
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Tourwithhotel() {
    const { uid, lang } = useParams();
    const { t, i18n } = useTranslation();
    i18n.changeLanguage(lang)
    return (
        <Box sx={{ minWidth: 400, flexGrow: 1 }}>
            <WithhotelAppBar uid={uid} lang={lang}/>
            <Withhotelpcard uid={uid} lang={lang}/>
            
        </Box>
    );
}

export default Tourwithhotel;