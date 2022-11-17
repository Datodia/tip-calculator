import React from 'react'
import styles from './Button.module.css'

export const Button = ({ setPercent }) => {

    const handleClick = (e) => {
        setPercent(e.value)
    }

    const handleChange = (e) => {
        setPercent(Number(e.target.value))
    }

    const buttons = [
        {
            id: 1,
            value: 5
        },
        {
            id: 2,
            value: 10
        },
        {
            id: 3,
            value: 15
        },
        {
            id: 4,
            value: 25
        },
        {
            id: 5,
            value: 50
        }
    ]

    return (
        <>
            <h1 className={styles.title}>Select Tip %</h1>
            <div className={styles.wrapper} >
                {buttons.map((elem) => {
                    return <button className={styles.button} onClick={() => handleClick(elem)}>{elem.value}%</button>
                })}
                <input type='number' placeholder='Custom' onChange={handleChange} />
            </div>
        </>
    )
}
