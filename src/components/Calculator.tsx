import React from 'react'
import styles from '../styles/Calculator.module.css'
import OperatorButton from './OperatorButton';
import NumberButton from './NumberButton';
import Screen from './Screen';

const Calculator = () => {
  const operators: string[] = ['x', '/', '+', '-'];
  const numbers: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

  return (
    <div className={styles.calculatorWrapper}>
      <div className={styles.contentWrapper}>
        <div className={styles.screenWrapper}>
          <Screen />
        </div>
        <div className={styles.operatorWrapper}>
          {operators.map((operator: string, index: number) => (
            <OperatorButton key={index} operatorSymbol={operator} buttonColor='#000000' width={100} height={70} marginTop='20px' />
          ))}
        </div>
        <div className={styles.middleContentWrapper}>
          <div className={styles.moreMiddleWrapper}>
            <div className={styles.numbersWrapper}>
              {numbers.map((num: string, index: number) => (
                <NumberButton key={index} buttonNumber={num} />
              ))}
            </div>
            <div className={styles.specialOpWrapper} >
              <OperatorButton operatorSymbol='Clear' buttonColor='#000000' width={100} height={195} />
              <OperatorButton operatorSymbol='=' buttonColor='#ff7300ff' width={100} height={195} />
            </div>
          </div>
          <div className={styles.lowerWrapper}>
            <div className={styles.lowerButtonWrapper}>
              <NumberButton buttonNumber='0' width={230} />
              <div style={{marginTop: '-1px'}}>
                <OperatorButton operatorSymbol='.' buttonColor='gray' width={100} height={70} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Calculator