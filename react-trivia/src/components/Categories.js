import { useEffect, useState } from 'react';
import axios from 'axios'

export function Categories() {
    const [apiResults, displayApiResults] = useState([])


    useEffect(() => {
        axios
            .get(`https://opentdb.com/api_category.php`)
            .then((res) => {
                console.log(res.data)
                displayApiResults(res.data)
            })
    }, [])

    return (
        <div>
            <p>Results go here:</p>
            {apiResults.map((apiResult, index) => {
                return (
                    <div key={index}>
                        <p>{index}</p>
                        <p>{apiResult.created_at}</p>
                        <p>{apiResult.location}</p>
                        {apiResult.content.map((eachCat) => (
                            <div key={eachCat.index}>
                                <h1>{eachCat.category}</h1>
                            </div>
                        ))}
                    </div>
                )
            })}
        </div>
    )
}