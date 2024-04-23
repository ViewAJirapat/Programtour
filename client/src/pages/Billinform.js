import Box from '@mui/material/Box';
import Statement from '../components/statement/Statement';
import StatementAppBar from '../components/statement/StatementAppBar';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


function Billinform(){
    const { uid, id, lang } = useParams();
    const { t, i18n } = useTranslation();
    i18n.changeLanguage(lang)
    return(
        <Box sx={{ flexGrow: 1}}>
            <StatementAppBar uid={uid} id={id} lang={lang}/>
            <Statement uid={uid} id={id} lang={lang}/>
        </Box>
    );
}

export default Billinform;