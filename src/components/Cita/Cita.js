import React from "react";
import "./Cita.css";
import { Boton } from "../Botón/Boton";

export function Cita({ citas, setCitas, mascota, dueño, fecha, hora, sintomas }) {

  const eliminarCita = (masc) => {
    console.log("Eliminar cita:", mascota);
    const nuevoArrayCitas = citas.filter(c => c.masc !== masc);
    setCitas(nuevoArrayCitas);
    console.log("hola" + nuevoArrayCitas);

}

    return (<div className="cita">
    <p>Mascota: <span>{mascota}</span></p>
    <p>Dueño: <span>{dueño}</span></p>
    <p>Fecha: <span>{fecha}</span></p>
    <p>Hora: <span>{hora}</span></p>
    <p>Sintomas: <span>{sintomas}</span></p>
    <Boton onClick={eliminarCita(mascota)} txt="Eliminar x" clase="button elimnar u-full-width"/>
  </div>);

}