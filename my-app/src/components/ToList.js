import {todoReducer, initTodo} from './reducers/todoReducer'
import React from 'react';
import Todo from './'


const TodoList = props =>{
    const handleComplete = id =>{
        props.dispatch({
            type: 'COMPLETE_TODO',
            id: id
        })
    }

    return (
        <div>
            {props.state.map(task =>
                <Todo
                    item = {task.item}
                    completed = {task.completed}
                    id = {task.id}
                
                />
            )}
        </div>
    )
    
}

export default TodoList;