import React from 'react';
import PropTypes from "prop-types"
// import style from "./Saludar.css"
import './Saludar.scss'


export default function Saludar(props){
const { data: {nombre, apellido, edad, ciudad} }= props

    console.log(ciudad)
    return (
        <div className="saludar">
            <p className="nombre">Hola {nombre} {apellido}, ¿comó estas?</p>
       <p className="creditos">Creditos...</p>
        </div>

    )
}

Saludar.propTypes = {
data: PropTypes.object.isRequired
}
// export default  Saludar;