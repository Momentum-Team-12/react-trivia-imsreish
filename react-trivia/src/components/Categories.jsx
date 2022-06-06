import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios'
import Gameplay from './Gameplay'
import '../App.css'

export function Categories() {
    const [catObjects, setCatObjects] = useState([])
    const [selectedCat, setSelectedCat] = useState(false)
    const [questions, setQuestions] = useState([])

    useEffect(() => {
        axios
            .get(`https://opentdb.com/api_category.php`)
            .then((res) => {
                // console.log(res.data.trivia_categories)
                setCatObjects(res.data.trivia_categories)
            })
    },
        [])

    const handleSetSelectedCat = (catId) => {
        // get request for selected category happens here
        axios
            .get(`https://opentdb.com/api.php?amount=10&category=${catId}`)
            .then((res) => {
                setSelectedCat(true)
                setQuestions(res.data.results)
            })
    }

    return (
        <>
            {!selectedCat ? (
                <>
                    <div>
                        <h2>Select a category:</h2>
                        {catObjects.map((catObject, index) => {
                            const catName = catObject.name
                            const catId = catObject.id
                            return (
                                <div className="catContainer" key={index}>
                                    <button onClick={() => handleSetSelectedCat(catId)}>{catName}</button>
                                </div>
                            )
                        })}
                    </div >
                </>
            ) : (
                <>
                    <div>
                        {questions && questions.map((question, index) => {
                            return (
                                <Gameplay
                                    questionText={question.question}
                                    correctAnswer={question.correct_answer}
                                    key={index}
                                    incorrectAnswers={question.incorrect_answers}
                                />
                            )
                        })}
                    </div>
                </>
            )}
        </>
    )
}

// export function showCatName(catObject) {
//     alert(`Hello! You selected ${catObject.name}`);
// }