import { Box, Container, Divider, Stack, Typography } from '@mui/material';
import MyButton from '../components/Button';
import MyButtonFab from '../components/ButtonFab';
import { useState } from 'react';
import ListAltIcon from '@mui/icons-material/ListAlt';
import Servicios  from './Servicios'
import sopTec from "../assets/soptec.png"






function Home({title}) {
   
        const [showMore, setShowMore] = useState(false);
        

       function handleMoreClick() {
         setShowMore(!showMore);
         console.log('valor: ' + showMore );
         
     };

     function Imagen () {
        return(
            <Box>
                <img src={sopTec} className="logo" alt="SopTec" />
            </Box>
        )
    }


    return(
        <>
        <Container >
            <Box>
          
                    <h1>{title}</h1>
                    <h3>Se distingue por dar respuesta a la integración de proyectos, enfocado a la atención al cliente</h3>
              
            </Box>
            <Box>
                <Imagen />
            </Box>
            <Box>
                <Typography>Somos una empresa TCP dedicada a la prestación de servicios de soporte técnico, servicios informáticos y electrónicos a particulares y sistema empresarial. Garantiza la integridad rápidez y eficiencia a lo largo y ancho de nuestro territorio.
                Radicamos en la ciudad de Santiago de Cuba. Cuba. Para dudas, información y asesoramiento contáctenos por Whatsapp</Typography>
                <ul className='lista'>
                    <li>El pago es MN, aunque se acepta MLC si lo desea.</li>
                    <li>Puede pagar en efectivo o transferencias.</li>
                    <li>El Domicilio dentro de Santiago es de 250 cup.</li>
                </ul>
                <p>No dudes en llamarnos, ponte en contacto con nosotros</p>
            </Box>
            
            <Box>
                <Stack sx={{textAlign: "center", justifyContent: 'center'}} direction="row" spacing={2}>
                    
                    <MyButtonFab  />
                    <MyButton onClick={handleMoreClick} startIcon={<ListAltIcon />} color="success" variant="outlined" texto="Ver Servicios"  />
                </Stack>
            </Box>
            <Divider sx={{mt:4, mb:4}} />
            <Box sx={{flexWrap: 'wrap', p:4, mt: 4, mb:4, borderRadius: 2, border: 0, color: "blue", display: "flex", fontSize: 15, textAlign: "center", justifyContent: 'center'}}>  
                { showMore &&  <Servicios/> }
            </Box>
        </Container>
        </>
    )
}

export default Home;