import React from 'react'
import styles from '../styles/Calculator.module.css'

const Calculator = () => {
  return (
    <div className={styles.calculatorWrapper}>
        <div className={styles.contentWrapper}>
            <div className={styles.screenWrapper}>
            </div>
            <div className={styles.operatorWrapper}/>
        </div>
    </div>
  )
}

export default Calculator
