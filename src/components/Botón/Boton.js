import "./Boton.css"
export function Boton({txt, clase}){

    return (
        <button class={clase}>{txt}</button>
    );
}