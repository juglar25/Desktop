import React, {useState, useEffect} from "react";

export default function Car() {

/*
    const [started, setStarted] = useState(false)
    const [countKm, setCountkm] = useState(0)
*/
    const [carState, setCarState] = useState({
        started: false,
        counKm: 0
    })


useEffect(() => {
    let started
    if (carState.started){
       started = "Encendido"
    } else{
       started = "Apagado"
    }
    document.title = `coche ${started}`
}, [carState])


    const checkStateCar = () =>{
        if (carState.started){
            return <span style={{color: "green"}}>Encendido</span>
        }
        return <span style={{color: "red"}}>Apagado</span>
    }
const increaseKm = num =>{
        if (carState.started){
            setCarState({
                ...carState,
                counKm: carState.counKm + 5
            })
        }else {
            alert("El coche esta apagado.")
        }
}
    return ( <div>
        <h2>Nuestro coche esta: {checkStateCar()}</h2>
        <h2>Kilometros Recorridos: {carState.counKm} Km</h2>
            <button onClick={() => {
                setCarState({
                    ...carState,
                    started: !carState.started
                })
            }}>Encender - Apagar</button>
            <button onClick={() => increaseKm(5)}>Recorrer Kms</button>
            </div>
)


}