import {useState, useEffect} from 'react'

export default function useFetch(url){

    const [data, setData] = useState(null)

    async function fetchData(){
        const response = await fetch(url)
        const data = await response.json()
        setData(data)
    }

    useEffect(() => {
        fetchData()
    }, [url])

    return {data}
}
