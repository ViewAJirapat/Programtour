import Adminhomebar from "../components/adminhome/Adminhomebar";
import TourNoBtn from '../components/tourdetail/TourNoBtn';
import '../components/tourdetail/Tour.css';
import Box from '@mui/material/Box';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


function Tourdetail() {
  const { id, lang } = useParams();
  const { t, i18n } = useTranslation();
  i18n.changeLanguage(lang)

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Adminhomebar lang={lang}/>
      <TourNoBtn id={id} lang={lang}/>   
    </Box>
     
  );
}

export default Tourdetail;
