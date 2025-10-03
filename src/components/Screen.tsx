import React from 'react'
import { useSelector } from 'react-redux';

const Screen = () => {
  const calcVal = useSelector((state: any) => state.calcValue.currentValue);
  return (
    <div style={{
        height: '100%',
        display: 'flex',
        fontSize: '2.5rem',
        paddingRight: '20px',
        justifyContent: 'flex-end',
        alignItems: 'center',
      }}>
      <div>
        <h1>{calcVal}</h1>
      </div>
    </div>
  )
}

export default Screen