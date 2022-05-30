import React from 'react';
import { useState } from 'react'

function Gameplay({ questionText, correctAnswer, incorrectAnswers, index }) {
    const [isCorrect, setIsCorrect] = useState(null)
    const allAnswers = [correctAnswer, ...incorrectAnswers]
    return (
        <>
            <div key={index}>
                <h2>{questionText}</h2>
                {isCorrect === null ? (
                    <>
                        {allAnswers.map((answer, index, correctAnswer) => {
                            function isTrueOrFalse(answer, correctAnswer) {
                                console.log(`Answer: ${answer}`)
                                // console.log(`Correct answer: ${correctAnswer}`)
                                return (correctAnswer = answer ? setIsCorrect("True") : setIsCorrect("False"))
                            }
                            return (
                                <button onClick={() => { isTrueOrFalse(answer) }} key={index}>
                                    {answer}
                                </button>
                            )
                        })}
                    </>
                ) : isCorrect === "True" ? (
                    // <p>Yes! The answer is {correctAnswer}.</p>
                    <p>The answer is {correctAnswer}.</p>
                ) : (
                    <p>That's not it. The correct answer is {correctAnswer}.</p>
                )}
            </div>
        </>
    )
}

export default Gameplay