import React, { useState, useReducer } from 'react';


function reducer(state, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state = 0;
    }
}


function Counter() {

    //const [number, setNumber] = useState(0);

    const [number, dispatch] = useReducer(reducer, 0);

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

    // const buttonHandler = (action) => {
    //     action === 'increase' 
    //         ? setNumber(prevNumber => prevNumber + 1) 
    //         : action === 'decrease' 
    //             ? setNumber(prevNumber => prevNumber - 1) 
    //             : setNumber(0);
    // }

    const buttonHandler = (action) => {
        action === 'increase' 
            ? dispatch({ type: 'INCREMENT' }) 
            : action === 'decrease' 
                ? dispatch({ type: 'DECREMENT' }) 
                : dispatch({ type: 'RESET' });
    }

    // useReducer 사용하기
    // useReducer 는 현재 상태와 액션 객체를 파라미터로 받아와서 새로운 상태를 반환해주는 함수이다
    // function reducer(state, action) {
    //     // 새로운 상태를 만드는 로직
    //     // const nextState = ...
    //     return nextState;
    // }
    // action 은 업데이트를 위한 정보를 가지고 있다
    // 주로 type 값을 지닌 객체 형태로 사용
    // const [state, dispatch] = useReducer(reducer, initialState);



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