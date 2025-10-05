import React from 'react'
import type { operatorProps } from '../types'
import { useDispatch } from 'react-redux'
import { setCurrentValue } from '../slices/valueSlice'

const OperatorButton = (props: operatorProps) => {
    
    const buttonWrapper: React.CSSProperties = {
        marginTop: props.marginTop,
        width: props.width,
        height: props.height,
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

    const dispatch = useDispatch();

    const handleClick = () => {
        switch(props.operatorSymbol){
            case 'Clear':
                dispatch(setCurrentValue('0'));
            default:
                break;
        }
    }

    return (
        <div style={buttonWrapper}>
            <button onClick={() => handleClick()}style={buttonStyles}> {props.operatorSymbol}</button>
        </div>
    )
}

export default OperatorButton
