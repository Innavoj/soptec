import * as React from 'react';
import { Fab } from '@mui/material';

import WhatsAppIcon from '@mui/icons-material/WhatsApp';

function MyButtonFab () {
    return (
        <>
            
            <Fab href="https://chat.whatsapp.com/GPv1WcXSBQD18cg9R5imp1" color="success" >
                 <WhatsAppIcon />
            </Fab>
            
        </>
    )
    
};

export default MyButtonFab;