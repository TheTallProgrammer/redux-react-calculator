import React from 'react'
import type { operatorProps } from '../types'
import styles from '../styles/SpecialOpButton.module.css'


const SpecialOpButton = (props: operatorProps) => {
  return (
    <div className={styles.buttonWrapper}>
      <button className={styles.buttonStyles}> {props.operatorSymbol}</button>
    </div>
  )
}

export default SpecialOpButton