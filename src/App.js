import React from 'react';
//import List from './List';
import Hello from "./Hello";
import Wrapper from './Wrapper';


const App = () => (
  <div className="container">
    <div className="row">
      <div className="col-6 justify-content-center my-5">
        <Wrapper>
          <Hello name="react" color="red" isSpecial={true}/>
          <Hello color="blue"/>
          <Hello name="react" color="red" isSpecial/>
        </Wrapper>
      </div>
    </div>
  </div>
);

export default App;
