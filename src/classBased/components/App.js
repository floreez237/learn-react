import '../App.css';
import React from 'react';
import TodoContainer from "./TodoContainer";

class App extends React.Component{

  render() {
    return <React.StrictMode>
      <TodoContainer/>
    </React.StrictMode>;
  }
}


export default App;
