import { useEffect, useState } from 'react';
import axios from 'axios'

export function Categories() {
    const [apiResults, displayApiResults] = useState([])


    useEffect(() => {
        axios
            .get(`https://api.github.com/users/imsreish/repos`)
            .then((res) => {
                console.log(res.data)
                displayApiResults(res.data)
            })
    }, [])

    return (
        <div>
            <p></p>
            {apiResults.map((apiResult) => {
                return (
                    <li key={apiResult.id}>
                        <p>{apiResult.id}</p>
                        <p>{apiResult.name}</p>
                        <p>{apiResult.merges_url}</p>
                    </li>
                )
            })}
        </div>
    )
}