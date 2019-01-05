import React, { Component } from 'react';
import './App.css';
import Schedule from './component/schedule'
import Todo from './component/Todo'
class App extends Component {
  render() {
    return (
      <div className='container'>
        <Schedule />
        <Todo />
      </div>
    );
  }
}

export default App;
