import { useEffect, useState } from 'react';
import axios from 'axios'

export function Categories() {
    const [catObjects, setCatObjects] = useState([])
    const [selectedCat, setSelectedCat] = useState(null)

    useEffect(() => {
        axios
            .get(`https://opentdb.com/api_category.php`)
            .then((res) => {
                console.log(res.data.trivia_categories)
                setCatObjects(res.data.trivia_categories)
            })
    }, [])

    return (
        <div>
            <p>The results are:</p>
            {catObjects.map((catObject, index) => {
                return (
                    <div className="catContainer" key={index}>
                        <button onClick={() => setSelectedCat(catObject.id)}>{catObject.name}</button>
                        <CatOptions
                            setSelectedCat={setSelectedCat}
                            isSelected={selectedCat === catObject.name}
                        />
                    </div>
                )
            })}
        </div>
    )
}

export function CatOptions({ setSelectedCat, isSelected }) {

    return (
        <div>
            <button>I am selected!</button>
            {/* <div>{isSelected}</div> */}
        </div>
    )
}