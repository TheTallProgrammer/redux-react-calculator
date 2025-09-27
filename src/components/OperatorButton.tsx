import React from 'react'
import type { operatorProps } from '../types'

const OperatorButton = (props: operatorProps) => {
    const buttonWrapper: React.CSSProperties = {
        marginTop: props.marginTop,
        width: props.width,
        height: props.height,
        /* background-color: black; */
        fontSize: '2.5rem',
        borderRadius: '10px',
    }
    const buttonStyles: React.CSSProperties = {
        width:'100%',
        height:`100%`,
        fontSize: '2rem',
        backgroundColor: props.buttonColor,
        color: '#ffffffff',
        borderRadius: '10px',
    }
    return (
        <div style={buttonWrapper}>
            <button style={buttonStyles}> {props.operatorSymbol}</button>
        </div>
    )
}

export default OperatorButton
