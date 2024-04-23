import RefundAppBar from "../components/refundrequest/RefundAppBar";
import RefundInfo from "../components/refundrequest/Refundinfor";
import Box from '@mui/material/Box';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


function Refundrequest(){
    const { uid, id, lang } = useParams();
    const { t, i18n } = useTranslation();
    i18n.changeLanguage(lang)
    return(
        <Box sx={{ flexGrow: 1 }}>
            <RefundAppBar uid={uid} id={id} lang={lang}/>
            <RefundInfo uid={uid} id={id} lang={lang}/>
        </Box>
    );
}

export default Refundrequest;