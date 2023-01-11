import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Quiz = () => {
    const questions = [
        {
            question: 'What do you understand by the word "TECH"?',
            options: [
                { option: 'Coding meaning full websites and apps?', isCorrect: false },
                { option: 'Designing the interface of mobile apps or websites?', isCorrect: false },
                { option: 'A space where computers are used to create things?', isCorrect: true },
                { option: 'Javascript', isCorrect: false },
            ]
        },
        {
            question: 'what is UI/UX?',
            options: [
                { option: 'Design tool?', isCorrect: false },
                { option: 'Design pattern', isCorrect: false },
                { option: 'User Interface', isCorrect: true },
                { option: 'User Page', isCorrect: false },
            ]
        },
        {
            question: 'which is a basic rule of design?',
            options: [
                { option: 'Contrast', isCorrect: true },
                { option: 'Opacity', isCorrect: false },
                { option: 'Indexing of variables', isCorrect: false },
                { option: 'Differences', isCorrect: false },
            ]
        },
        {
            question: 'which is not a basic rule of design?',
            options: [
                { option: 'Pattern', isCorrect: false },
                { option: 'Indentation', isCorrect: false },
                { option: 'Regx', isCorrect: true },
                { option: 'Unity', isCorrect: false },
            ]
        },
        {
            question: 'Who founded UI/UX??',
            options: [
                { option: 'Charles Gabbage', isCorrect: false },
                { option: 'Arnold Schwartz', isCorrect: false },
                { option: 'Ronald Galloway', isCorrect: false },
                { option: 'Don Norman', isCorrect: true },
            ]
        },
        {
            question: 'Which of these can be used for UI/UX designs?',
            options: [
                { option: 'Adobe Reader', isCorrect: false },
                { option: 'Corel draw', isCorrect: false },
                { option: 'Canva', isCorrect: true },
                { option: 'Note pad', isCorrect: false },
            ]
        },
        {
            question: 'which rule is the most important in uiux color schemes?',
            options: [
                { option: '60-30-10', isCorrect: true },
                { option: '40-20-10', isCorrect: false },
                { option: '80-45-25', isCorrect: false },
                { option: '20-20-20', isCorrect: false },
            ]
        },
        {
            question: 'which is the minimum font-size to be used?',
            options: [
                { option: '14px', isCorrect: false },
                { option: '16px', isCorrect: true },
                { option: '12px', isCorrect: false },
                { option: '18px', isCorrect: false },
            ]
        },
        {
            question: 'Which of these should you not consider while selecting font?',
            options: [
                { option: 'Sans vs Sarifs', isCorrect: false },
                { option: 'Legibility', isCorrect: false },
                { option: 'Branding', isCorrect: false },
                { option: 'Vignette', isCorrect: true },
            ]
        },
        {
            question: 'which is a basic rule of design?',
            options: [
                { option: 'Contrast', isCorrect: true },
                { option: 'Opacity', isCorrect: false },
                { option: 'Indexing of variables', isCorrect: false },
                { option: 'Differences', isCorrect: false },
            ]
        },

    ]
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [finish, setFinish] = useState(false)
    const [score, setScore] = useState(0)
    const [calc, setCalcScore] = useState(false)

    const handleClick = (e) => {
        const increment = currentQuestion + 1
        if (e === true) {
            setScore(score + 1)
        }
        if (increment < questions.length) {
            setCurrentQuestion(increment)
        }
        else if (score * 10 < 80) {
            setFinish(true)
            setCalcScore(true)
        }
        else {
            setFinish(true)
            setCalcScore(false)
        }
    }

    const set = () => {
        setScore(0)
        setFinish(false)
        setCurrentQuestion(0)
    }
    console.log(score)

    return (
        <div style={{ marginTop: '5%', alignItems: 'center', height: '90vh', display: 'flex', justifyContent: 'center', background: '#111' }}>
            <div style={{ boxShadow: '10px 10px 25px rgba(231, 226, 226, 0.3)', border: '1px solid #000', width: '40%', height: 'fit-content', background: '#083c77', color: '#fff' }}>
                <div style={{ padding: '3%', fontFamily: 'sans-serif', height: '100%' }}>

                    {finish ?
                        <div style={{ display: 'flex', height: '100%', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '0.5rem' }}>
                            <p>
                                You scored {score} out of {questions.length}
                            </p>
                            {calc ?
                                <div>
                                    <p>You failed</p>
                                    <button onClick={set} style={{ border: 'none', padding: '0.5rem', borderRadius: '0.5rem', cursor: 'pointer' }}>
                                        Retake Quiz
                                    </button>
                                </div>
                                :

                                <Link to='/program' style={{ color: '#fff' }}>
                                    <p>You passed</p>
                                    <button style={{ border: 'none', padding: '0.5rem', borderRadius: '0.5rem', cursor: 'pointer' }}>
                                        Back to Programs
                                    </button>
                                </Link>}

                        </div>
                        : (
                            <div className='questionsDiv'>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                    <div className="questionCount">Question {currentQuestion + 1} / {questions.length}</div>
                                    <div>{questions[currentQuestion].question}</div>
                                </div>
                                <div style={{ width: '100%', height: '100%' }}>
                                    {questions[currentQuestion].options.map((each) => (
                                        <div onClick={() => handleClick(each.isCorrect)} className='options'>{each.option}</div>
                                    ))}
                                </div>
                            </div>
                        )}
                </div>
            </div>
        </div >
    )
}

export default Quiz