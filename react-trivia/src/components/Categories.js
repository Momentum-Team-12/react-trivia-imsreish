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
            {apiResults.map((apiResult) => {
                return (
                    <li key={apiResult.name}>
                        <p>{apiResult.name}</p>
                        <p>{apiResult.bio}</p>
                        <p>{apiResult.location}</p>
                    </li>
                )
            })}
        </div>
    )
}