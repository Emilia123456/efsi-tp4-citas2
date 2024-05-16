import './Listado.css';
import {Cita} from '../Cita/Cita.js'

export function Listado({ citas, setCitas}) {
    console.log(citas)
    return (
        <>
            {citas.map(item => (
                <Cita
                    citas = {citas}
                    setCitas = {setCitas}
                    mascota={item.mascota}
                    dueño={item.dueño}
                    fecha={item.fecha}
                    hora={item.hora}
                    sintomas={item.sintomas}
                />
            ))}
        </>


    );
}

    

