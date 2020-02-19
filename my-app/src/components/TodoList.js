import React, {useReducer} from "react";
import Todo from '../components/Todo';

const TodoList = props =>{
    // const [todo, setTodo] = setState(initState);

    return (
        <div>
            {props.state.map(x =>
                <Todo
                    item = {x.item}
                    completed = {x.completed}
                    id = {x.id}
                    dispatch = {props.dispatch}
                />
            )}
        </div>
    );
}

export default TodoList