import React from 'react';
//import List from './List';
import Hello from "./Hello";
import Wrapper from './Wrapper';
import Counter from './Counter';


const App = () => (
  <div className="container">
    <div className="row">
      <div className="col-6 justify-content-center my-5">
        <Wrapper>
          <Hello name="react" color="red" isSpecial={true}/>
          <Hello color="blue"/>
          <Hello name="react" color="red" isSpecial/>
          <Counter />
        </Wrapper>
      </div>
    </div>
  </div>
);

export default App;
