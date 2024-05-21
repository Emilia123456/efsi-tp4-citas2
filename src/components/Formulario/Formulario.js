import "./Formulario.css"

import {Boton} from "../Botón/Boton";
import { useState } from "react";
//import { getElementError } from "@testing-library/react";

export function Formulario({citas, setCitas}){
    const [id,setId] = useState(0);
  
    function handleSubmit(e){
        e.preventDefault();
        console.log("Formulario enviado");
            
        setId(id+1);
        
        let nuevaCita = {
            id:id,
            mascota : document.getElementById('mascota').value,
            dueño : document.getElementById('dueño').value,
            fecha : document.getElementById('fecha').value,
            hora : document.getElementById('hora').value,
            sintomas : document.getElementById('sintomas').value
        };
    
        let citasNuevas = [...citas, nuevaCita];
        setCitas(citasNuevas);
        
    }
    
    console.log(citas);

    return (<form onSubmit={handleSubmit}>
        <label>Nombre mascota</label>
          <input type="text" name="Nombre mascota" id="mascota" class="u-full-width" placeholder="Escriba" />
        <label>Nombre dueño</label>
          <input type="text" name="Nombre Dueño" id="dueño" class="u-full-width" placeholder="Escriba" />
        <label>Fecha</label>
          <input type="date" name="Fecha" id="fecha" class="u-full-width" placeholder="" />
        <label>Hora</label>
          <input type="time" name="Hora" id="hora" class="u-full-width" placeholder="" />
        <label>Sintomas</label>
          <input type="text" name="Sintomas" id="sintomas" class="u-full-width" placeholder="Escriba" />
        <Boton txt="Agregar cita" clase="u-full-width button-primary"/>
    </form>);
}