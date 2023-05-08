import { useState } from 'react';
import './App.css';
import Header from "./componentes/Header/Header";
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(true);

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario);
  }

  return (
    <div>
      <Header />
      {/* mostrarFormulario ? <Formulario /> : <></> */} 
      {mostrarFormulario && <Formulario /> }
      
      <MiOrg cambiarMostrar={cambiarMostrar}/>
      <Equipo />
    </div>
  );
}

export default App;
