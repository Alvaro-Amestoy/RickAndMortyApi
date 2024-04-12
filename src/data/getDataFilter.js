import { useEffect , useState} from 'react'

function getDataFilter (url){
    const [ data , setData ] = useState([])

    const charachters = () => {
        fetch(url)
        .then((response) => response.json())
        .then(data => setData(data))
        .catch(error => console.log(error))
    };
    console.log(data)

    useEffect(() => {
        charachters()
    }, [])

    return { data }

} 

function getDataFilterName(url){
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

export {getDataFilterName, getDataFilter}