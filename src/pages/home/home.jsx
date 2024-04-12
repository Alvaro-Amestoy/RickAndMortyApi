import Header from '../../components/header/header'
import "./homeStyle.css"
import {getDataFilter} from '../../data/getDataFilter'
import { useState } from 'react';

function home() {
    const [input , setInput] = useState("")

    function characterRandom() {
        const character = Math.floor(Math.random() * 825) + 1;
        return character;
    }

    const { data: dataCharacter } = getDataFilter(`https://rickandmortyapi.com/api/character/${characterRandom()}`)
    const { data: dataEpisodes } = getDataFilter(`https://rickandmortyapi.com/api/episode/1`)
    const { data: dataLocation } = getDataFilter("https://rickandmortyapi.com/api/location/1")

    return (
        <>
            <Header />
            <main>
                <section>
                    <h1>Motivo de creación</h1>
                    <p>Esta pagina fue desarrollada para poder probar conocimientos en manejo de apis, manejo de formularios y React js</p>
                </section>
                <section>
                    <h2>Personaje aleatorio</h2>
                    <span>Haz F5 para cambiar</span>
                    {
                        <article className='article-element'>
                            <img src={dataCharacter.image} alt="" />
                            <span>{dataCharacter.name}</span>
                        </article>
                    }
                    {
                        <article>
                            <span>{dataEpisodes.name}</span>
                        </article>
                    }
                    {
                        <article>
                            <span>{dataLocation.name}</span>
                        </article>
                    }
                </section>
            </main>
        </>
    )
}

export default home