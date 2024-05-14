import './App.css';
import { Formulario } from './components/Formulario/Formulario';
import {Listado} from './components/Listado/Listado'
import React, {useState} from 'react';

function App() {
  const [citas, setCitas] = useState([]);

  return (<>
        <h1>ADMINISTRADOR DE PACIENTES</h1>
        <div class="container">
          <div class="row">
            <div class="one-half column">
              <h2>Crear mi Cita</h2>
              <Formulario citas={citas} setCitas={setCitas} />
            </div>
            <div className="one-half column">
              <Listado  citas={citas} setCitas={setCitas}/>          
            </div>
          </div>
        </div>
      </>
  );
}



export default App;
