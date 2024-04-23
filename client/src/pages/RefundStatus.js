import Status from '../components/refund-status/Status';
import '../components/tourdetail/Tour.css';
import Box from '@mui/material/Box';
import StatusAppBar from '../components/refund-status/StatusAppBar';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import StatusTable from '../components/refund-status/StatusTable';


function RefundStatus() {
  const { uid, lang } = useParams();
  const { t, i18n } = useTranslation();
  i18n.changeLanguage(lang)
  return (
    <Box sx={{ flexGrow: 1 }}>
      <StatusAppBar uid={uid} lang={lang}/> 
      <StatusTable uid={uid} lang={lang}/>  
    </Box>
     
  );
}

export default RefundStatus;
