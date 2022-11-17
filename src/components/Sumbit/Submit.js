import React from 'react'
import styles from './Submit.module.css'

export const Submit = ({ bill, person, setResult, percent, setPerson }) => {
    const handleClick = () => {
        if (person == null) {
            setPerson(0)
        }
        if (person !== null && person !== 0) {
            setResult(bill + person + percent)
        }

    }


    return (
        <div>
            <button className={styles.button} onClick={handleClick}>Sumbit</button>
        </div>
    )
}
