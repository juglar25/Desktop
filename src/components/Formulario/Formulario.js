import React from "react";

export default function Formulario() {

    return (
        <form>
            <FormInput
                title="Email"
                name="Email"
                type="email"
                placeholder="Escribe tu correo electronico"
            />
            <FormInput
                title="Contraseña"
                name="password"
                type="password"

                placeholder="Escribe tu Contraseña"
            />
            <br/>
            <FormButtonSend/>
        </form>

    )

}
function FormInput(props) {
    const {title, name, type, placeholder} = props

    return (
        <div>
            <label>{title}:</label><br/>
            <input name={name} type={type} placeholder={placeholder}/>
        </div>
        
    )
}
function FormButtonSend() {

    return <button type="submit">Enviar</button>
}