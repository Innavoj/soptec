
import './App.css';
//import Servicios from './pages/Servicios';
import Home from './pages/home';
import { Metadata } from "react"

export const metadata: Metadata = {
  title: "Soporte Tecnico y Soluciones Integrales",
  description: "Soporte Tecnico, Soluciones Web, Web Developer, Web Solutions",
  
};

function App() {
 
  return (
    <>
    <helmet>
      <title>Soporte Tecnico y Soluciones Integrales</title>
      <meta name="description" content="Soporte Tecnico Soluciones Integrales Web Developer Web Solutions servicios informáticos" />
    </helmet>

    <div className='App'>
      <Home titulo="Soporte Técnico y Soluciones Integrales" />
    </div>
    </>
  )
}

export default App;
