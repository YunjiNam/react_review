import React from 'react';

function Hello({ color, name }) {
    return <div style={{ color: color}}>안녕하세요 {name}</div>
}

// 기본값 설정
Hello.defaultProps = {
    name: '이름 없음'
}


export default Hello;