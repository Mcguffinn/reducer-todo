import React, {useState} from "react";

const TodoForm = props =>{

    const [state, setState] = useState('');

    const handleChanges = e => {
        setState(e.target.value)
    }

    const handleSubmit = e =>{
        e.preventDefault();
        props.dispatch({type:'ADD_ITEM', payload:state})
    }

    return (
        <div>
            <form onSubmit = {handleSubmit}>
              <input
                onChange = {handleChanges}
                type="text"
                name="todo"
                id="todo"
                placeholder="...todo"
              />
              <button>Add Todo</button>
            </form>
            <button onClick>Clear finished Tasks</button>

        </div>
    );
}

export default TodoForm