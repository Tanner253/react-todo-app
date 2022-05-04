import React from 'react';
import './index.css'
import ToDo from './components/todo/todo.js';

export default class App extends React.Component {
  render() {
    return (
      <div id='app'>
        <ToDo />
      </div>
    );
  }
}
