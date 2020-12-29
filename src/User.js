import React, { useEffect } from 'react';

function User({ list, onRemove, onToggle }) {

    // useEffect 를 사용할 때는 첫번째 파라미터에 함수, 두번째 파라미터에 의존값이 들어있는 배열(deps)을 넣는다
    // deps 배열을 비우면, 컴포넌트가 처음 나타날 때만 useEffect 에 등록된 함수가 호출된다
    // useEffect 에서 함수를 반환할 수 있는데 이를 cleanup 함수라고 한다
    // cleanup 함수는 useEffect 에 대한 뒷정리를 해준다고 보면 된다
    // deps 가 비어있는 경우에는 컴포넌트가 사라질 때 claenup 함수가 호출된다

    // useEffect 안에서 사용하는 상태나, props 가 있다면, useEffect 의 deps 에 넣어주어야 한다
    // useEffect 안에서 사용하는 상태나 props 를 deps 에 넣지 않게 된다면 useEffect 에 등록한 함수가 실행될 때
    // 최신 props 상태를 가르키지 않게 된다

    useEffect(() => {
        console.log('list 값이 설정됨');
        console.log(list);
        return () => {
            console.log('list 가 바뀌기 전...');
            console.log(list);
        };
    }, [list]);

    return (
        <div>
        
            <b 
                style={{ 
                    cursor: 'pointer', 
                    color: list.active ? 'green' : 'black' 
                }} 
                onClick={() => onToggle(list.id)}
            >
                {list.username}
            </b> 
            &nbsp;
            <span>({list.email})</span>
            &nbsp;
            <button onClick={() => onRemove(list.id)}>삭제</button>
        </div>
    );
}

export default User;