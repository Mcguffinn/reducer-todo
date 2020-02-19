import React, {useReducer} from 'react';
import './App.css';
import {todoReducer, initState} from './reducers/reducer';
import Todo from './components/Todo'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'



function App() {

  const [state, dispatch] = useReducer(todoReducer, initState);


  return (
    <div className="App">
      <TodoList
        state = {state}
        dispatch = {dispatch}
      />
      <TodoForm
        dispatch = {dispatch}
      />
    </div>
  );
}

export default App;
