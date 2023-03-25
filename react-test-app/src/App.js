import React, { useState } from "react"
import { Button } from "./Button"

export const App = () => {

    //Estructuras de Fatos
    //const pets = ['bruno','lucas','simba']
    
    //Hooks (useState)
    const [pets, setPets] = useState(['bruno','lucas','simba'])
    const [inputPet, setInputPet] = useState("");
    
    //Eventos
    const onChangeInputPet = (event) => {
        setInputPet(event.target.value)
    }

    //Funciones
    const onAddPet = () => {
        setPets([...pets, inputPet])
        setInputPet("")
    }

    //Al final es el retorno de la función
    return (
        <React.Fragment>
            <h1>Hola React 👌</h1>
            <Button name="Enviar" />
            <br /><br />
            <Button name="Desacargar" />
            <br /><br />
            <input value={inputPet} onChange={onChangeInputPet} type="text" placeholder="Ingresar mascota" />
            <Button name="Agregar" OnPress={onAddPet} />
            <ul>
                {
                    pets.map(item => <li>{item}</li>)
                }
            </ul>
        </React.Fragment>
        
    )
}

