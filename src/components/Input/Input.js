import React from 'react'
import styles from './Input.module.css'

export const Input = ({ name, img, handleChange, error, person, value }) => {
    return (
        <div>
            <div className={styles.titleDiv}>
                <h1 className={styles.title}>{name}</h1>
                {person === 0 ? <h1 className={styles.error}>{error}</h1> : null}
            </div>

            <div className={styles.wrapper}>
                <img src={img} className={styles.img} />
                <input placeholder="0" type="number" onChange={handleChange} value={value} />
            </div>
        </div >
    )
}
