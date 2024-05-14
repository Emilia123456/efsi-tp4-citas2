import './Listado.css';
import {Cita} from '../Cita/Cita.js'

export function Listado({ citas }) {
    return (
        <>
            {citas.map((item, Citas) => (
                <Cita
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

    

