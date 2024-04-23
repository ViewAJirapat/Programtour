import Navbar from '../components/tourdetail/Navbar';
import Tour from '../components/tourdetail/Tour';
import '../components/tourdetail/Tour.css';
import Box from '@mui/material/Box';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Tourdetail() {
  const { uid, id, lang } = useParams();
  const { t, i18n } = useTranslation();
  i18n.changeLanguage(lang)

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Navbar uid={uid} id={id} lang={lang}/>
      <Tour uid={uid} id={id} lang={lang}/>   
    </Box>
     
  );
}

export default Tourdetail;
