import React, { useState } from 'react';

function Counter() {

    const [number, setNumber] = useState(0);

    // const onIncrease = () => {
    //     setNumber(number + 1);
    //     console.log('+1');
    // }

    // const onDecrease = () => {
    //     setNumber(number - 1);
    //     console.log('-1');
    // }

    // const onReset = () => {
    //     setNumber(0);
    //     console.log('reset');
    // }

    const buttonHandler = (action) => {
        action === 'increase' 
            ? setNumber(prevNumber => prevNumber + 1) 
            : action === 'decrease' 
                ? setNumber(prevNumber => prevNumber - 1) 
                : setNumber(0);
    }

    return (
        <div>
            <h1 style={{ fontSize: "30px", fontWeight: 'bold' }}>{number}</h1>
            <button onClick={() => buttonHandler('increase')}>+1</button>
            <button onClick={() => buttonHandler('decrease')}>-1</button>
            <button onClick={() => buttonHandler('reset')}>reset</button>
        </div>
    );
}

export default Counter;