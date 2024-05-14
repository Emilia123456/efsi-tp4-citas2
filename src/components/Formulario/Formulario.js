import "./Formulario.css"
import {InputsFormulario} from "../InputsFormulario/InputsFormulario"
import {Boton} from "../Botón/Boton";

export function Formulario(){

    return (<form>
        <InputsFormulario label="Nombre mascota" tipo="text" nombre="mascota" placeholder="Nombre mascota"/>
        <InputsFormulario label="Nombre Dueño" tipo="text" nombre="propietario" placeholder="Nombre dueño de la mascota"/>
        <InputsFormulario label="Fecha" tipo="date" nombre="fecha" placeholder=""/>
        <InputsFormulario label="Hora" tipo="time" nombre="hora" placeholder=""/>
        <InputsFormulario label="Sintomas" tipo="text" nombre="sintomas" placeholder=""/>
        <Boton  onClick="agregarCita(mascota, propietario, fecha, hora, sintomas)" txt="Agregar cita" clase="u-full-width button-primary"/>
    </form>);
}