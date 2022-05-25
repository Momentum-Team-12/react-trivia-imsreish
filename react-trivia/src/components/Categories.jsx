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
    },
        [])


    const showCatName = (catName) => {
        console.log(catName)
        return (
            window.alert(`you have selected ${catName}`)
        )
    }

    return (
        <div>
            <p>The results are:</p>
            {catObjects.map((catObject, index) => {
                const catName = catObject.name
                return (
                    <div className="catContainer" key={index}>
                        <button onClick={() => showCatName(catName)}>{catName}</button>
                    </div>
                )
            })}
        </div >
    )
}

// export function showCatName(catObject) {
//     alert(`Hello! You selected ${catObject.name}`);
// }