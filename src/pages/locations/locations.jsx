import Header from '../../components/header/header'
import '../../styles/articlesStyles.css'
import './locationStyle.css'
import getData from '../../data/getData'

function locations() {

    const { data } = getData("https://rickandmortyapi.com/api/location")
    return (
        <>
            <Header />
            <main>
                <section className='all-articles'>
                    {data.map((charachter, index) => (
                        <article key={index} className='article-element' id='article-location'>
                            <img src={charachter.image} alt="" />
                            <span>{charachter.name}</span>
                        </article>
                    ))}
                </section>
            </main>
        </>
    )
}

export default locations