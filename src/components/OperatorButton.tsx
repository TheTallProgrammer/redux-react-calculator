import React from 'react'
import styles from '../styles/OperatorButton.module.css'

interface operatorProps {
    operatorSymbol: string
}

const OperatorButton = (props: operatorProps) => {
    return (
        <div className={styles.buttonWrapper}>
            <button className={styles.buttonStyles}> {props.operatorSymbol}</button>
        </div>
    )
}

export default OperatorButton
