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
                <img src={sopTec} className="logo" alt="Soporte Tecnico" />
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
            <meta name="description" content="Descubre en nosotros la garantía, solución, rápidez y vitalidad." />
        </helmet>
        <Analytics />
        <Container flexWrap='wrap'>
            {/* <ImgFondo /> */}
            <Container flexWrap='wrap'>
            <Box sx={{pt:4, pb:6, color:"white", flexWrap:'wrap'}}>
                <Typography variant="h2" >{titulo}</Typography>
                <Typography variant="h4" sx={{pt: 4, pb: 4}}>Se distingue por la solución a la integración de proyectos, exclusivo, orientado a resultados y reconocido por la atención al cliente</Typography>             
            </Box>
            <Box>
                <ImgLogo />
            </Box>
            </Container >
            <Box sx={{pt:4, pb:4, color:"white"}}>
                <Typography variant="h5">Somos una empresa recomendada a la solución de servicios de soporte técnico, soluciones informáticas y electrónicas. </Typography>
                <Typography variant="h5">Descubre en nosotros la garantía, solución, rápidez y vitalidad. </Typography>
                <Typography variant="h5">Una buena oferta con descuento inluido. </Typography>
                <Typography variant="h5">Radicamos en la ciudad de Santiago de Cuba. Cuba. </Typography>
                
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
                <Typography variant="h5" color= "success" sx={{pt: 2, pb: 2, }}>Para más información y mejor asesoramiento, no dudes en contactarnos</Typography>
            </Box>
            
            <Box >
                <Stack  direction="row" flexWrap= 'wrap' textAlign= "center" justifyContent= 'center' spacing={4} >   
                    <MyButtonFab />
                    <MyButton onClick={handleMoreClick} startIcon={<ListAltIcon />} color="inherit" variant="outlined" texto="Descubre nuestros Servicios"  />
                </Stack>
            </Box>
            <Divider sx={{mt:4, mb:4}} />
            <Box sx={{flexWrap: 'wrap', p:4, mt: 4, mb:4, borderRadius: 2, border: 0, color: "black", display: "flex", fontSize: 15, textAlign: "center", justifyContent: 'center'}}>  
                { showMore &&  <Servicios/> }
            </Box>
        </Container>
        </>
    )
}

export default Home;