import imgLogo from "../../Images/LogoApp.png"
import "./headerStyle.css"

function header() {

    return (
        <header>
            <a href="/"><img src={imgLogo} alt="" /></a>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/locations">Lugares</a></li>
                    <li><a href="/episodes">Capitulos</a></li>
                    <li><a href="/characters">Personajes</a></li>
                    <li><a href="https://github.com/Alvaro-Amestoy/RickAndMortyApi" target="_blank">Proyecto Github</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default header