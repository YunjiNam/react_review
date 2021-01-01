import React, { useRef, useState, useMemo, useCallback, useReducer } from 'react';
//import List from './List';
import Hello from "./Hello";
import Wrapper from './Wrapper';
import Counter from './Counter';
import InputSample from './InputSample';
import UserList from './UserList';
import CreateUser from './CreateUser';

function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는중...');
  return users.filter(user => user.active).length;
}

// function App() {

//   const [inputs, setInputs] = useState({
//     username: '',
//     email: ''
//   });
//   const { username, email } = inputs;
//   const onChange = useCallback(
//     e => {
//       const { name, value } = e.target;
//       setInputs(inputs => ({
//         ...inputs,
//         [name]: value
//       }));
//     },[]);

//   const [users, setUsers] = useState([
//     {
//         id: 1,
//         username: 'pin',
//         email: 'pin1234@gmail.com',
//         active: true
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
//   ]);

//   const nextId = useRef(4);
//   const onCreate = useCallback(
//     () => {
//       if (username.length > 0 && email.length > 0) {
//         const user = {
//           id: nextId.current,
//           username,
//           email
//         };
//         //setUsers([...users, user]);
//         setUsers(users => users.concat(user));
      
//         setInputs({
//           username: '',
//           email: ''
//         });
      
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
  
//       setUsers(users => users.filter(user => user.id !== id));
//     },
//     []
//   );

//   // useCallback 은 특정 함수를 새로 만들지 않고 재사용하고 싶을 때 사용한다
//   // 함수 안에서 사용하는 상태 혹은 props 가 있으면 deps 배열 안에 꼭 포함시켜야 한다
//   // 그렇지 않으면 함수 내에서 해당 값들을 참조할 때 가장 최신 값을 참조할 것이라고 보장할 수 없다

//   const onToggle = useCallback(
//     (id) => {
//       setUsers(users => users.map(user => 
//         user.id === id ? { ...user, active: !user.active } : user
//         )
//       );
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
//         </div>
//       </div>
//     </div>
//   );

// };



const initialState = {
  inputs: {
    username: '',
    email: ''
  },
  users: [
    {
      id: 1,
      username: 'pin',
      email: 'pin1234@gmail.com',
      active: true
    },
    {
        id: 2,
        username: 'jake',
        email: 'hijake20@gmail.com',
        active: false
    },
    {
        id: 3,
        username: 'jo',
        email: 'jojov@gmail.com',
        active: false
    },
  ]
};

function reducer(state, action) {
  switch (action.type) {
    case 'CHANGE_INPUT':
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.name]: action.value
        }
      };
    case 'CREATE_USER':
      return {
        inputs: initialState.inputs,
        users: state.users.concat(action.user)
      }
    case 'REMOVE_USER':
      return {
        inputs: initialState.inputs,
        users: state.users.filter(user => user.id !== action.id)
      }
    case 'TOGGLE':
      return {
        ...state,
        users: state.users.map((user) => user.id === action.id ? {...user, active: !user.active} : user)
      }
    default :
    return state;
  }
}

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);
  const nextId = useRef(4);
  const { users } = state;
  const { username, email } = state.inputs;

  const onChange = useCallback(
    e => {
      const { name, value } = e.target;
      dispatch({
        type: 'CHANGE_INPUT',
        name,
        value
      });
    },[]);

  const onCreate = useCallback(
    () => {
      if (username.length > 0 && email.length > 0) {
        const user = {
          id: nextId.current,
          username,
          email
        };

        dispatch({
          type: 'CREATE_USER',
          user
        })
      
        nextId.current += 1;
      } else {
        console.log('empty');
      }
    
    },
  [username, email]
  );

  const onRemove = useCallback(
    (id) => {
      // user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
      // = user.id 가 id 인 것을 제거함
  
      dispatch({
        type: 'REMOVE_USER',
        id
      })
    },
    []
  );

  // useCallback 은 특정 함수를 새로 만들지 않고 재사용하고 싶을 때 사용한다
  // 함수 안에서 사용하는 상태 혹은 props 가 있으면 deps 배열 안에 꼭 포함시켜야 한다
  // 그렇지 않으면 함수 내에서 해당 값들을 참조할 때 가장 최신 값을 참조할 것이라고 보장할 수 없다

  const onToggle = useCallback(
    (id) => {
      dispatch({
        type: 'TOGGLE',
        id
      })
    },[]
  );

  // useMemo 는 이전에 계산 한 값을 재사용한다
  // useMemo 의 첫번째 파라미터에는 어떻게 연산할지 정의하는 함수를 넣어주고 두번째 파라미터에는 deps 배열을 넣어준다
  // 이 배열 안에 넣은 내용이 바뀌면 등록한 함수를 호출해서 값을 연산해주고, 내용이 바뀌지 않았다면 이전에 연산한 값을 재사용한다
  // 성능 최적화를 위해 사용

  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <div className="container" >
      <div className="row" >
        <div className="col-6 justify-content-center my-5" >
          <Wrapper>
            <Hello name="react" color="red" isSpecial={true} />
            <Hello color="blue" />
            <Hello name="react" color="red" isSpecial />
            <br />
            <Counter />
            <br />
            <InputSample />
            <br />
            <CreateUser 
              username={username}
              email={email}
              onChange={onChange}
              onCreate={onCreate}
            />
            <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
            <div>활성사용자 수 : {count}</div>

          </Wrapper>
        </div>
      </div>
    </div>
  );

};

export default App;
