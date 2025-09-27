import React from 'react'
import styles from '../styles/Calculator.module.css'
import OperatorButton from './OperatorButton';
import NumberButton from './NumberButton';
import Screen from './Screen';

const Calculator = () => {
  const operators: string[] = ['x', '/', '+', '-'];
  const numbers: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let keyId: number = 0;

  return (
    <div className={styles.calculatorWrapper}>
      <div className={styles.contentWrapper}>
        <div className={styles.screenWrapper}>
          <Screen/>
        </div>
        <div className={styles.operatorWrapper}>
          {operators.map((operator: string) => (
            <OperatorButton key={keyId + 1} operatorSymbol={operator} buttonColor='#000000' width={100} height={70} marginTop='20px'/>
          ))}
        </div>
        <div className={styles.middleContentWrapper}>
          <div className={styles.numbersWrapper}>
            {numbers.map((num: string) => (
              <NumberButton buttonNumber={num}/>
            ))}
          </div>
          <div className={styles.specialOpWrapper} > 
            <OperatorButton operatorSymbol='Clear' buttonColor='#000000' width={100} height={195}/>
            <OperatorButton operatorSymbol='=' buttonColor='#FFA500' width={100} height={195}/> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default Calculator