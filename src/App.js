
import './App.css';
import { Cita } from './components/Cita/Cita';
import { Formulario } from './components/Formulario/Formulario';
import React, {useState} from 'react';

function App() {
  return (<>
        <h1>ADMINISTRADOR DE PACIENTES</h1>
        <div class="container">
          <div class="row">
            <div class="one-half column">
              <h2>Crear mi Cita</h2>
              <Formulario  />
            </div>
            <div className="one-half column">
              <Cita mascota="Pipa" dueño="Martin" fecha="2021-08-05" hora="08:20" sintomas="Le duele la pierna" />
              <Cita mascota="Sifon" dueño="Flecha" fecha="2023-08-05" hora="09:24" sintomas="Duerme mucho" />
              <Cita mascota="Floki" dueño="Ari" fecha="2023-08-05" hora="16:15" sintomas="No está comiendo" />
            </div>
          </div>
        </div>
      </>
  );
}

const [citas, setCitas] = useState([Cita]);

export default App;
