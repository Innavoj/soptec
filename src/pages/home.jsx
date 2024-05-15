import { Avatar, Box, Container, Divider, List, ListItem, ListItemAvatar, ListItemText, Stack, Typography } from '@mui/material';
import HomeIcono from '@mui/icons-material/HomeWork';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CreditCardIcon from '@mui/icons-material/CreditCard';
//import PagoIcono from '@mui/icons-material/FactCheck';
//import CardIcon from '@mui/icons-material/CardTravel';
import MyButton from '../components/Button';
import MyButtonFab from '../components/ButtonFab';
import { useState } from 'react';
import ListAltIcon from '@mui/icons-material/ListAlt';
import Servicios  from './Servicios'
import sopTec from "../assets/soptec.png"
//import fondo from "../assets/fondo1.jpg"
import { Analytics } from "@vercel/analytics/react";


function Home({titulo}) {
   
        const [showMore, setShowMore] = useState(false);
        

       function handleMoreClick() {
         setShowMore(!showMore);
         console.log('valor: ' + showMore );
         
     };

     function ImgLogo () {
        return(
            <Box>
                <img src={sopTec} className="logo" alt="SopTec" />
            </Box>
        )
    }
    // function ImgFondo () {
    //     return(
    //         <Box>
    //             <img src={fondo} alt="Fondo Pantalla" width="100%" height="500" className="logo" />
    //         </Box>
    //     )
    // }



    return(
        <>
        <helmet>
            <title>Soptec - Soporte Tecnico y Soluciones Integrales</title>
            <meta name="description" content="Soptec Soporte Tecnico Soluciones Integrales Web Developer Web Solutions servicios informáticos" />
        </helmet>
        <Analytics />
        <Container >
            {/* <ImgFondo /> */}
            <Box sx={{pt:4, pb:4, color:"blueviolet"}}>
                <Typography variant="h3"  >{titulo}</Typography>
                <Typography variant="h5">Se distingue por dar respuesta a la integración de proyectos, enfocado a la atención al cliente</Typography>             
            </Box>
            <Box>
                <ImgLogo />
            </Box>
            <Box sx={{pt:4, pb:4, color:"blueviolet"}}>
                <Typography>Somos una empresa dedicada a la prestación de servicios de soporte técnico, servicios informáticos y electrónicos a particulares y sistema empresarial. Garantiza la integridad rápidez y eficiencia a lo largo y ancho de nuestro territorio.
                Radicamos en la ciudad de Santiago de Cuba. Cuba. </Typography>
                <Typography> Para dudas, información y asesoramiento contáctenos por Whatsapp</Typography>
                <Box  sx={{pt:2, pb:2}} >
                <Stack display="flex" direction="row" flexWrap= 'wrap' textAlign= "center" justifyContent= 'center'>
                <List >
                    <ListItem >
                        <ListItemAvatar>
                            <Avatar>
                                <AttachMoneyIcon  />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Pagos en MN" secondary="Pagos en MLC" />
                    </ListItem>
                    <ListItem   >
                        <ListItemAvatar>
                            <Avatar>
                                <CreditCardIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Pagos en efectivo" secondary="Pagos en Transferencias" />
                    </ListItem>
                    <ListItem   >
                        <ListItemAvatar>
                            <Avatar>
                                <HomeIcono />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Domicilio en la ciudad" secondary="Domicilio Fuera de la ciudad" />
                    </ListItem>
                </List>
                </Stack>
                </Box>
                <Typography variant="h5" sx={{pt: 2, pb: 2}}>No dudes en llamarnos, ponte en contacto con nosotros</Typography>
            </Box>
            
            <Box >
                <Stack  direction="row" flexWrap= 'wrap' textAlign= "center" justifyContent= 'center' spacing={4} >   
                    <MyButtonFab />
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