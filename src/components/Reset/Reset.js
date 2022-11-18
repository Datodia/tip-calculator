import React from 'react'
import styles from './Reset.module.css'

export const Reset = ({ setAmount, setResult, setBill, setPerson, setPercent, setActive }) => {

    const handleClick = () => {
        setAmount(0.00)
        setResult(0.00)
        setBill("")
        setPerson("")
        setPercent("")
        setActive(0)
    }

    return (
        <div className={styles.wrapper}>
            <button onClick={handleClick}>RESET</button>
        </div>
    )
}
