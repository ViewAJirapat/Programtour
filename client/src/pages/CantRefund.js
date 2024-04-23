import CantRefundInfo from "../components/refundrequest/CantRefund";
import RefundAppBar from "../components/refundrequest/RefundAppBar";
import Box from '@mui/material/Box';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function CantRefund(){
    const { lang } = useParams();
    const { t, i18n } = useTranslation();
    i18n.changeLanguage(lang)
    return(
        <Box sx={{ flexGrow: 1}}>
            <RefundAppBar lang={lang}/>
            <CantRefundInfo lang={lang}/>
        </Box>
    )
}
export default CantRefund;