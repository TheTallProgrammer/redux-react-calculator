import React from 'react'
import type { numberProps } from '../types'
import styles from '../styles/NumberButton.module.css'

const NumberButton = (props: numberProps) => {
  const numberButtonStyles: React.CSSProperties = {
    width: props.width ? props.width : 100,
    height: props.height ? props.height : 70,
  }
  return (
    <div style={numberButtonStyles}>
      <button className={styles.buttonStyles}>{props.buttonNumber}</button>
    </div>
  )
}

export default NumberButton;