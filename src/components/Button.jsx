import { Button } from "@mui/material";


function MyButton ({onClick, startIcon, color, variant, texto}) {


    
    return (
        <>
         <Button onClick={onClick} startIcon={startIcon} color={color} variant={variant} >{texto} </Button>
         
        </>
    )
}

export default MyButton;
