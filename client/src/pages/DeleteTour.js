import { Box } from "@mui/material";
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import DeleteBar from "../components/deletetour/DeleteBar";
import ContentDel from "../components/deletetour/ContentDel";

function DeleteTour(){
    const { lang } = useParams();
    const { t, i18n } = useTranslation();
    i18n.changeLanguage(lang)
    return(
        <Box sx={{ minWidth:400, flexGrow: 1 }}>
            <DeleteBar lang={lang}/>
            <ContentDel lang={lang}/>
        </Box>
    );
}

export default DeleteTour;