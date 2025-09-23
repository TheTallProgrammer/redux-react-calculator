import React from 'react'
import styles from '../styles/OperatorButton.module.css'

interface operatorProps {
    operatorSymbol: string
}

const OperatorButton = (props: operatorProps) => {
    return (
        <div className={styles.buttonWrapper}>
            <div className={styles.contentWrapper}>
                <button>{props.operatorSymbol}</button>
            </div>
        </div>
    )
}

export default OperatorButton
