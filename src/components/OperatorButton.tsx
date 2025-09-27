import React from 'react'
import styles from '../styles/OperatorButton.module.css'
import type { operatorProps } from '../types'


const OperatorButton = (props: operatorProps) => {
    return (
        <div className={styles.buttonWrapper}>
            <button className={styles.buttonStyles}> {props.operatorSymbol}</button>
        </div>
    )
}

export default OperatorButton
