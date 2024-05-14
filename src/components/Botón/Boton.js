import "./Boton.css"
export function Boton({txt, clase}){

    return (
        <button type="submit" class={clase}>{txt}</button>
    );
}