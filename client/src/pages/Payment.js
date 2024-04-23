import Box from '@mui/material/Box';
import Paymentinfo from '../components/payment/Payment';
import PaymentAppBar from '../components/payment/PaymentAppBar';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


function Payment(){
    const { uid, id, lang } = useParams();
    const { t, i18n } = useTranslation();
    i18n.changeLanguage(lang)
    return(
        <Box sx={{ flexGrow: 1}}>
            <PaymentAppBar uid={uid} id={id} lang={lang}/>
            <Paymentinfo uid={uid} id={id} lang={lang}/>
            
        </Box>
    );
}

export default Payment;