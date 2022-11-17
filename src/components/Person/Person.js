import React from 'react'
import styles from './Person.module.css'

export const Person = ({ amount }) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>
                <h1>Tip amount</h1>
                <p>/ person</p>
            </div>
            <h1>${amount}</h1>
        </div>
    )
}
