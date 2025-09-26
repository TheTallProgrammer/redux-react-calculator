import React from 'react'
import styles from '../styles/Calculator.module.css'
import OperatorButton from './OperatorButton';

const Calculator = () => {
  const operators: string[] = ['x', '/', '+', '-'];
  let keyId: number = 0;

  return (
    <div className={styles.calculatorWrapper}>
        <div className={styles.contentWrapper}>
            <div className={styles.screenWrapper}/>
            <div className={styles.operatorWrapper}>
              {operators.map((operator: string) => (
                <OperatorButton key={keyId + 1} operatorSymbol={operator}/>
              ))}
            </div>
            <div className={styles.numbersWrapper}/>
            <div className={styles.specialOpWrapper}/>
        </div>
    </div>
  )
}

export default Calculator