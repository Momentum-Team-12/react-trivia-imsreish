import { useEffect, useState } from 'react';
import axios from 'axios'

export function Categories() {
    const [catObjects, setCatObjects] = useState([])
    const [selectedCat, setSelectedCat] = useState(null)

    useEffect(() => {
        axios
            .get(`https://opentdb.com/api_category.php`)
            .then((res) => {
                // console.log(res.data.trivia_categories)
                setCatObjects(res.data.trivia_categories)
            })
    },
        [])

    const showCatName = (catName, catId) => {
        console.log(catName)
        return (
            window.alert(`https://opentdb.com/api.php?amount=10&category=${catId}`)
        )
    }

    return (
        <div>
            {/* <div>
                {catObjects.map((catObject, index) => (
                    <p>Hello, {catObject.name} with {catObject.id}!</p>
                ))}
            </div> */}
            <button onClick={() => showCatName()}>Click me</button>
            <p>The results are:</p>
            {catObjects.map((catObject, index) => {
                const catName = catObject.name
                const catId = catObject.id
                return (
                    <div className="catContainer" key={index}>
                        <button onClick={() => showCatName(catName, catId)}>{catName}</button>
                    </div>
                )
            })}
        </div >
    )
}

// export function showCatName(catObject) {
//     alert(`Hello! You selected ${catObject.name}`);
// }