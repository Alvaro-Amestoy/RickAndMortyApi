import Header from '../../components/header/header'
import '../../styles/articlesStyles.css'
import './episodeStyle.css'
import getData from '../../data/getData'

function episodes() {

    const { data } = getData("https://rickandmortyapi.com/api/episode")
    return (
        <>
            <Header />
            <main>
                <section className='all-articles'>
                    {data.map((charachter, index) => (
                        <article key={index} className='article-element' id='article-episode'>
                            <img src={charachter.image} alt="" />
                            <span>{charachter.air_date}</span>
                            <span>{charachter.name}</span>
                        </article>
                    ))}
                </section>
            </main>
        </>
    )
}

export default episodes