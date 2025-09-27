import React from 'react'
import type { numberProps } from '../types'
import styles from '../styles/NumberButton.module.css'

const NumberButton = (props: numberProps) => {
  return (
    <div className={styles.buttonWrapper}>{props.buttonNumber}</div>
  )
}

export default NumberButton