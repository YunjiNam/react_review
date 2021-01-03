// import React, { useRef, useMemo, useCallback, useReducer } from 'react';
// //import List from './List';
// import Hello from "./Hello";
// import Wrapper from './Wrapper';
// import Counter from './Counter';
// import InputSample from './InputSample';
// import UserList from './UserList';
// import CreateUser from './CreateUser';
// import styled, { css } from 'styled-components';

// function countActiveUsers(users) {
//   console.log('활성 사용자 수를 세는중...');
//   return users.filter(user => user.active).length;
// }

// const initialState = {
//   inputs: {
//     username: '',
//     email: ''
//   },
//   users: [
//     {
//       id: 1,
//       username: 'pin',
//       email: 'pin1234@gmail.com',
//       active: true
//     },
//     {
//         id: 2,
//         username: 'jake',
//         email: 'hijake20@gmail.com',
//         active: false
//     },
//     {
//         id: 3,
//         username: 'jo',
//         email: 'jojov@gmail.com',
//         active: false
//     },
//   ]
// };

// function reducer(state, action) {
//   switch (action.type) {
//     case 'CHANGE_INPUT':
//       return {
//         ...state,
//         inputs: {
//           ...state.inputs,
//           [action.name]: action.value
//         }
//       };
//     case 'CREATE_USER':
//       return {
//         inputs: initialState.inputs,
//         users: state.users.concat(action.user)
//       }
//     case 'REMOVE_USER':
//       return {
//         inputs: initialState.inputs,
//         users: state.users.filter(user => user.id !== action.id)
//       }
//     case 'TOGGLE':
//       return {
//         ...state,
//         users: state.users.map((user) => user.id === action.id ? {...user, active: !user.active} : user)
//       }
//     default :
//     return state;
//   }
// }

// function App() {

//   const [state, dispatch] = useReducer(reducer, initialState);
//   const nextId = useRef(4);
//   const { users } = state;
//   const { username, email } = state.inputs;

//   const onChange = useCallback(
//     e => {
//       const { name, value } = e.target;
//       dispatch({
//         type: 'CHANGE_INPUT',
//         name,
//         value
//       });
//     },[]);

//   const onCreate = useCallback(
//     () => {
//       if (username.length > 0 && email.length > 0) {
//         const user = {
//           id: nextId.current,
//           username,
//           email
//         };

//         dispatch({
//           type: 'CREATE_USER',
//           user
//         })
      
//         nextId.current += 1;
//       } else {
//         console.log('empty');
//       }
    
//     },
//   [username, email]
//   );

//   const onRemove = useCallback(
//     (id) => {
//       // user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
//       // = user.id 가 id 인 것을 제거함
  
//       dispatch({
//         type: 'REMOVE_USER',
//         id
//       })
//     },
//     []
//   );

//   // useCallback 은 특정 함수를 새로 만들지 않고 재사용하고 싶을 때 사용한다
//   // 함수 안에서 사용하는 상태 혹은 props 가 있으면 deps 배열 안에 꼭 포함시켜야 한다
//   // 그렇지 않으면 함수 내에서 해당 값들을 참조할 때 가장 최신 값을 참조할 것이라고 보장할 수 없다

//   const onToggle = useCallback(
//     (id) => {
//       dispatch({
//         type: 'TOGGLE',
//         id
//       })
//     },[]
//   );

//   // useMemo 는 이전에 계산 한 값을 재사용한다
//   // useMemo 의 첫번째 파라미터에는 어떻게 연산할지 정의하는 함수를 넣어주고 두번째 파라미터에는 deps 배열을 넣어준다
//   // 이 배열 안에 넣은 내용이 바뀌면 등록한 함수를 호출해서 값을 연산해주고, 내용이 바뀌지 않았다면 이전에 연산한 값을 재사용한다
//   // 성능 최적화를 위해 사용

//   const count = useMemo(() => countActiveUsers(users), [users]);

//   return (
//     <div className="container" >
//       <div className="row" >
//         <div className="col-6 justify-content-center my-5" >
//           <Wrapper>
//             <Hello name="react" color="red" isSpecial={true} />
//             <Hello color="blue" />
//             <Hello name="react" color="red" isSpecial />
//             <br />
//             <Counter />
//             <br />
//             <InputSample />
//             <br />
//             <CreateUser 
//               username={username}
//               email={email}
//               onChange={onChange}
//               onCreate={onCreate}
//             />
//             <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
//             <div>활성사용자 수 : {count}</div>

//           </Wrapper>
//           <Circle color="red" hugs/>
//           <Circle color="blue" />
//         </div>
//       </div>
//     </div>
//   );

// };

// const Circle = styled.div`
//   width: 5rem;
//   height: 5rem;
//   background-color: ${props => props.color || 'black'};
//   &:hover {
//     background-color: orange;
//     cursor: pointer;
//   }
//   border-radius: 50%;
//   ${props => 
//     props.hugs && 
//     css`
//       width: 10rem;
//       height: 10rem;
//     `
//   }
// `;


// export default App;


// styled component study

import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Button from './components/Button';
import Dialog from './components/Dialog';

function App() {
  const [dialog, setDialog] = useState(false);
  const onClick = () => {
    setDialog(true);
  };
  const onConfirm = () => {
    console.log('확인');
    setDialog(false);
  };
  const onCancel = () => {
    console.log('취소');
    setDialog(false);
  };

  return (
    <ThemeProvider
      theme={{
        palette: {
          blue: '#228be6',
          gray: '#495057',
          pink: '#f06595'
        }
      }}
    >
      <>
        <AppBlock>
          <ButtonGroup>
            <Button size="large">BUTTON</Button>
            <Button>BUTTON</Button>
            <Button size="small">BUTTON</Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button color="gray" size="large">
              BUTTON
            </Button>
            <Button color="gray">BUTTON</Button>
            <Button color="gray" size="small">
              BUTTON
            </Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button size="large" fullWidth>
              BUTTON
            </Button>
            <Button size="large" color="gray" fullWidth>
              BUTTON
            </Button>
            <Button size="large" color="pink" fullWidth onClick={onClick}>
              삭제
            </Button>
          </ButtonGroup>
        </AppBlock>
        <Dialog
          title="정말로 삭제하시겠습니까?"
          confirmText="삭제"
          cancelText="취소"
          onConfirm={onConfirm}
          onCancel={onCancel}
          visible={dialog}
        >
         데이터를 정말로 삭제하시겠습니까?
        </Dialog>

      </>
    </ThemeProvider>
  );
}

const AppBlock = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 4rem;
  border: 1px solid black;
  padding: 1rem;
`;

const ButtonGroup = styled.div`
display: flex;
  justify-content: center;
  align-items: center;

  & + & {
    margin-top: 1rem;
  }
`;


export default App;