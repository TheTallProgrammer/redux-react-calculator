import React, { useState } from 'react'
import type { numberProps } from '../types'
import styles from '../styles/NumberButton.module.css'
import { useDispatch } from 'react-redux'
import { setCurrentValue } from '../slices/valueSlice'

const NumberButton = (props: numberProps) => {
  const dispatch = useDispatch();
  const handleOnClick = () => {
    const newVal = props.buttonNumber;
    dispatch(setCurrentValue(newVal));
  }
  const numberButtonStyles: React.CSSProperties = {
    width: props.width ? props.width : 100,
    height: props.height ? props.height : 70,
  }
  return (
    <div style={numberButtonStyles}>
      <button onClick={() => handleOnClick()} className={styles.buttonStyles}>{props.buttonNumber}</button>
    </div>
  )
}

export default NumberButton;