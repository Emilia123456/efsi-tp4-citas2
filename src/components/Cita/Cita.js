import "./Cita.css"
import { Boton } from "../Botón/Boton";

export function Cita({mascota, dueño, fecha, hora, sintomas}){


    return (<div className="cita">
    <p>Mascota: <span>{mascota}</span></p>
    <p>Dueño: <span>{dueño}</span></p>
    <p>Fecha: <span>{fecha}</span></p>
    <p>Hora: <span>{hora}</span></p>
    <p>Sintomas: <span>{sintomas}</span></p>
    <Boton txt="Eliminar x" clase="button elimnar u-full-width"/>
  </div>);
}