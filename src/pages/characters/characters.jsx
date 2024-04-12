import Header from '../../components/header/header'
import '../../styles/articlesStyles.css'
import './charactersStyle.css'
import getData from '../../data/getData'

function characters() {

    const { data } = getData("https://rickandmortyapi.com/api/character")
    return (
        <>
            <Header />
            <main>
                <section className='all-articles'>
                    {data.map((charachter, index) => (
                        <article key={index} className='article-element'>
                            <img src={charachter.image} alt="" />
                            <span>{charachter.name}</span>
                        </article>
                    ))}
                </section>
            </main>
        </>
    )
}

export default characters