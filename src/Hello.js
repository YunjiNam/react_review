import React from 'react';

function Hello({ color, name, isSpecial }) {
    return (
        <div style={{ color: color}}>
            { isSpecial && <b>* </b>}
            안녕하세요 {name}
        </div>
    );
}

// 기본값 설정
Hello.defaultProps = {
    name: '이름 없음'
}


export default Hello;