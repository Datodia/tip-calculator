import styles from './Button.module.css'

export const Button = ({ setPercent, active, setActive, percent }) => {


    const handleClick = (e) => {
        setPercent(e.value)
        setActive(e.id)
    }

    const handleChange = (e) => {
        const val = Math.max(0, Math.min(900, Number(e.target.value)));
        setPercent(val.toString());
        // setPercent(Number(e.target.value))
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
                    return <button style={{ backgroundColor: active === elem.id ? "var(--focus)" : null }} className={styles.button}
                        onClick={() =>
                            handleClick(elem)
                        }>{elem.value}%</button>
                })}
                <input type='number' value={percent} placeholder='Custom' onFocus={() => setActive(0)} onChange={handleChange} />
            </div>
        </>
    )
}
