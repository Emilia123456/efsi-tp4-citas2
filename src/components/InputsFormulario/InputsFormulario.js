import "./InputsFormulario.css"

export function InputsFormulario({label, tipo, nombre, placeholder}){

    return (
        <>
          <label>{label}</label>
          <input type={tipo} name={nombre} class="u-full-width" placeholder={placeholder} value="" />
        </>
      );
}