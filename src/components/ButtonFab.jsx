import * as React from 'react';
import { Fab } from '@mui/material';

import WhatsAppIcon from '@mui/icons-material/WhatsApp';

function MyButtonFab () {
    return (
        <>
            
            <Fab href="https://wa.link/hpc7ry" color="success" >
                 <WhatsAppIcon />
            </Fab>
            
        </>
    )
    
};

export default MyButtonFab;