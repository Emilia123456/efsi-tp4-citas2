import "./Boton.css"
export function Boton({txt, clase, onClick}){

    return (
        <button onClick={onClick} class={clase}>{txt}</button>
    );
}