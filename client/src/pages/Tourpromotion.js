import Promotioncard from "../components/tourblog/promotioncard";
import { Box } from "@mui/material";
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PromotionAppBar from "../components/tourblog/promotionAppBar";

function Tourpromotion() {
    const { uid, lang } = useParams();
    const { t, i18n } = useTranslation();
    i18n.changeLanguage(lang)
    return (
        <Box sx={{ minWidth: 400, flexGrow: 1 }}>
            <PromotionAppBar uid={uid} lang={lang}/>
            <Promotioncard uid={uid} lang={lang}/>
            
        </Box>
    );
}

export default Tourpromotion;