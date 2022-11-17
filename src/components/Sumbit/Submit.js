import React from 'react'
import styles from './Submit.module.css'

export const Submit = ({ bill, person, setResult, percent, setPerson, setAmount }) => {

    let tip = (((bill * percent) / 100) / person)

    const handleClick = () => {
        if (person == null) {
            setPerson(0)
        }
        if (person !== null && person !== 0 && person !== "") {
            setAmount(Number.parseFloat(tip).toFixed(2))
            setResult(Number.parseFloat(((bill / person) + tip)).toFixed(2))
        }

    }


    return (
        <div>
            <button className={styles.button} onClick={handleClick}>Sumbit</button>
        </div>
    )
}
