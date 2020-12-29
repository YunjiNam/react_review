import React, { useRef, useState, useMemo } from 'react';
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

function App() {

  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });
  const { username, email } = inputs;
  const onChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const [users, setUsers] = useState([
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
  ]);

  const nextId = useRef(4);
  const onCreate = () => {
    if (username.length > 0 && email.length > 0) {
      const user = {
        id: nextId.current,
        username,
        email
      };
      //setUsers([...users, user]);
      setUsers(users.concat(user));
  
      setInputs({
        username: '',
        email: ''
      });
  
      nextId.current += 1;
    } else {
      console.log('empty');
    }
    
  };

  const onRemove = (id) => {
    // user.id 가 파라미터로 일치하지 않는 워소만 추출해서 새로운 배열을 만듬
    // = user.id 가 id 인 것을 제거함

    setUsers(users.filter(user => user.id !== id));
  };

  const onToggle = (id) => {
    setUsers(users.map(user => 
      user.id === id ? { ...user, active: !user.active } : user
      )
    );
  };

  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <div className="container">
    <div className="row">
      <div className="col-6 justify-content-center my-5">
        <Wrapper>
          <Hello name="react" color="red" isSpecial={true}/>
          <Hello color="blue"/>
          <Hello name="react" color="red" isSpecial/>
        </Wrapper>
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
      </div>
    </div>
  </div>
  );

};

export default App;
