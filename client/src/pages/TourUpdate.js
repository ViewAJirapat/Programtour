import { Box } from "@mui/material";
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import DeleteBar from "../components/deletetour/DeleteBar";
import TourUpdate from "../components/deletetour/Tourupdate";


function TourUpdatePage() {
  const { id, lang } = useParams();
  const { t, i18n } = useTranslation();
  i18n.changeLanguage(lang)

  return (
    <Box sx={{ flexGrow: 1 }}>
      <DeleteBar id={id} lang={lang}/>
      <TourUpdate id={id} lang={lang}/>   
    </Box>
     
  );
}

export default TourUpdatePage;
