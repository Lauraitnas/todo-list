import React from "react"; //to do everytime in a jsx file

import "./TodoItem.css"

function TodoItem(props) {
    const { todo, index, completeTodo, removeTodo } = props;

    return (
    <div className={`todo ${todo.isCompleted ? "complete" : ""}`}>{todo.text} 
        <div>
            <button onClick={() => completeTodo(index)}>Complete</button>
            <button onClick={() => removeTodo(index)}>X</button>
        </div>
    </div>
    );
}

export default TodoItem; //this is what get exported from this file

// ?= if :=else (line 9)