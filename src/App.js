
import './App.css';
//import Servicios from './pages/Servicios';
import Home from './pages/home';
import { Metadata } from "react";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Soporte Tecnico y Soluciones Integrales",
  description: "Web Developer Web Solutions Soluciones Informaticas Desarrollo web"  
};

function App() {
 
  return (
    <>
    <helmet>
      <title>Soptec - Soporte Tecnico y Soluciones Integrales</title>
      <meta name="description" content="Descubre en nosotros la garantía, solución, rápidez y vitalidad." />
    </helmet>

    <div className='App'>
      <Analytics />
      <Home titulo="Soporte Técnico y Soluciones Integrales" />
    </div>
    </>
  )
}

export default App;
