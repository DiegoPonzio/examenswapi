import { useEffect, useState } from 'react';
import './App.css';
import './style1.css'
import './style4.css';

function App3() {

    const URL = "https://swapi.dev/api/starships/"
    const [todos, setTodos] = useState()
    const fetchAPI = async () => {
        const response = await fetch(URL)
        const responseJSON = await response.json()
        setTodos(responseJSON)
    }
    useEffect(() => {
        fetchAPI()
    }, [])
    return (
        <div className="blockInfo">
            <h1 className='nameCard'>Naves de Star Wars</h1>
            <br></br>
            {!todos ? <div className="container">Cargando... <span id="linea2"></span></div> : todos.results.map((todo, index) => {
                return <article className="cards">
                    <div className='card_content'>
                        <h3 className='card_title'>{todo.name}</h3>
                        <p className='card_description'>
                            Manufacturador: {todo.manufacturer}
                            <br></br>
                            Costo en creditos: {todo.cost_in_credits}
                            <br></br>
                            Tripulación: {todo.crew}
                            <br></br>
                            Capasidad de carga: {todo.cargo_capacity}
                            <br></br>
                            Calificación del Hiperimpulsor: {todo.hyperdrive_rating}
                        </p>
                    </div>
                </article>
            })}
        </div>
    );
}

export default App3;