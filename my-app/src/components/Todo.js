import React from "react";
import "./../App.css";

const Todo = props =>{

    const handleComplete = id =>{
        props.dispatch({type: 'COMPLETED_TODO', id: id})
    }

    console.log(props.item)
    return (
        <div
            className={props.item.completed ? ' task-scratched' : ""}
            onClick={()=> handleComplete(props.id)}
            key={props.id}
        >
            <p>{props.item}</p>
        </div>
    );
}

export default Todo