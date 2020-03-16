import React, { useReducer } from 'react';
import './App.css';
import TodoList from './components/Todo'
import Form from './components/Form'
import {todoReducer, initTodo} from './reducers/todoReducer'



function App() {

  const [state, dispatch] =  useReducer(todoReducer, initTodo);

  return (
    <div className="App">
      <header className="App-header">
        <TodoList state={state} dispatch={dispatch}/>
        <Form/>
      </header>
    </div>
  );
}

export default App;
