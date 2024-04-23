import Box from '@mui/material/Box';
import ProofBar from '../components/uploadproof-refund/proofbar';
import Proof from '../components/uploadproof-refund/proofrefund';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


function ProofRefund(){
    const { id, lang } = useParams();
    const { t, i18n } = useTranslation();
    i18n.changeLanguage(lang)
    return(
        <Box sx={{ flexGrow: 1}}>
            <ProofBar id={id} lang={lang}/>
            <Proof id={id} lang={lang}/>
        </Box>
    );
}

export default ProofRefund;