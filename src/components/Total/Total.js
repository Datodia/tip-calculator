import React from 'react'
import styles from './Total.module.css'

export const Total = ({ result }) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>
                <h1>Total</h1>
                <p>/ person</p>
            </div>
            <h1>${result}</h1>
        </div>
    )
}
