import "./Formulario.css"
import {InputsFormulario} from "../InputsFormulario/InputsFormulario"
import {Boton} from "../Botón/Boton";
import { getElementError } from "@testing-library/react";

export function Formulario({citas, setCitas}){
    function handleSubmit(e){
        e.preventDefault();
        console.log("Formulario enviado");
    
        let nuevaCita = {
            mascota : document.getElementById('mascota'),
            dueño : document.getElementById('dueño'),
            fecha : document.getElementById('fecha'),
            hora : document.getElementById('hora'),
            sintomas : document.getElementById('sintomas')
        };
    
        let citasNuevas = [...citas, nuevaCita];
        setCitas(citasNuevas);
    }
    

    return (<form onSubmit={handleSubmit}>
        <InputsFormulario label="Nombre mascota" tipo="text" nombre="mascota" placeholder="Nombre mascota" id='mascota'/>
        <InputsFormulario label="Nombre Dueño" tipo="text" nombre="dueño" placeholder="Nombre dueño de la mascota" id='dueño'/>
        <InputsFormulario label="Fecha" tipo="date" nombre="fecha" placeholder="" id='fecha'/>
        <InputsFormulario label="Hora" tipo="time" nombre="hora" placeholder="" id='hora'/>
        <InputsFormulario label="Sintomas" tipo="text" nombre="sintomas" placeholder="" id='sintomas'/>
        <Boton txt="Agregar cita" clase="u-full-width button-primary"/>
    </form>);
}