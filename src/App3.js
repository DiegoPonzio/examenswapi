import { useEffect, useState } from 'react';
import './App.css';
import './style3.css';

function App3() {

    const URL = "https://swapi.dev/api/planets/"
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
            <h1 className='nameCard'>Planetas de Star Wars</h1>
            <br></br>
            {!todos ? <div className="container2">Cargando... <span id="linea2"></span></div> : todos.results.map((todo, index) => {
                return <article className="cardp">
                    <div className='card_content'>
                        <h3 className='card_title'>{todo.name}</h3>
                        <p className='card_description'>
                            Período de rotación: {todo.rotation_period}
                            <br></br>
                            Período de orbita: {todo.orbital_period}
                            <br></br>
                            Diametro: {todo.diameter}
                            <br></br>
                            Clima: {todo.climate}
                            <br></br>
                            Gravedad: {todo.gravity}
                            <br></br>
                            Terreno: {todo.terrain}
                            <br></br>
                            Superficie de agua: {todo.surface_water}
                            <br></br>
                            Población: {todo.population}
                        </p>
                    </div>
                </article>
            })}
        </div>
    );
}

export default App3;