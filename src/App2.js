import { useEffect, useState } from 'react';
import './App.css';
import './style1.css';
import './style2.css'

function App2() {

    const URL = "https://swapi.dev/api/people/"
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
            <h1 className='nameCard'>Personajes de Star Wars</h1>
            <br></br>
            {!todos ? <div className="container">Cargando... <span id="linea"></span></div> : todos.results.map((todo, index) => {
                return <article className="card">
                    <div className='card_content'>
                        <h3 className='card_title'>{todo.name}</h3>
                        <p className='card_description'>
                            Año de Nacimiento: {todo.birth_year !== "unknown" ? todo.birth_year : "Desconocido"}
                            <br></br>
                            Color de ojos: {todo.eye_color}
                            <br></br>
                            Género: {todo.gender}
                            <br></br>
                            Color de pelo: {todo.hair_color}
                            <br></br>
                            Estatura (cm): {todo.height}
                            <br></br>
                            Masa (kg): {todo.mass}
                            <br></br>
                            Color de piel: {todo.skin_color}
                        </p>
                    </div>
                </article>
            })}
        </div>
    );
}

export default App2;