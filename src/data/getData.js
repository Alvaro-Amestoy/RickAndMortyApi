import { useEffect , useState} from 'react'

export default function getData (url){
    const [ data , setData ] = useState([])

    const charachters = () => {
        fetch(url)
        .then((response) => response.json())
        .then(data => setData(data.results))
        .catch(error => console.log(error))
    };
    console.log(data)

    useEffect(() => {
        charachters()
    }, [])

    return { data }

} 