import React, { useState, useRef } from 'react';

function InputSample() {

    //const [inputValue, setInputValue] = useState('');

    const [inputs, setInputs] = useState({
        name: '',
        nickname: ''
    });

    const nameInput = useRef();

    const { name, nickname } = inputs;  // 비구조화 할당을 통해 값 추출


    const inputHandler = (e) => {
        // setInputValue(e.target.value);
        // console.log(e.target.value);

        const { value, name } = e.target;  // 우선 e.target 에서 name 과 value 를 추출
        setInputs({
            ...inputs,   // 기존의 input 객체를 복사한 뒤
            [name]: value   // name 키를 가진 값을 value 로 설정
        });

    }

    const resetValue = () => {
        // setInputValue('');

        setInputs({
            name: '',
            nickname: ''
        });

        nameInput.current.focus();
    }

    return (
        <div>
            {/* <input onChange={inputHandler} value={inputValue}/> */}
            <input name="name" placeholder="name" onChange={inputHandler} value={name} ref={nameInput}/>
            <input name="nickname" placeholder="nickname" onChange={inputHandler} value={nickname} />
            <button onClick={resetValue}>초기화</button>
            <div>
                {/* <b>값: {inputValue}</b> */}
                <b>값: </b>
                {name} ({nickname})

            </div>
        </div>
    );
}

export default InputSample;