import { useState } from "react";

//components
import TodoItem from "./components/TodoItem/TodoItem";
import TodoForm from "./components/TodoForm/TodoForm";

//css
import "./App.css";

function App() {
  //State = to render on the browser (useState)
  const [todos, setTodos] = useState([
    {text: "Learn about React", isCompleted: false},
    {text: "Meet friends for lunch", isCompleted: false},
    {text: "Feed cat", isCompleted: false},
  ]);

  //actions
  const addTodo = (text) => {
    const newTodos = [...todos, {text: text, isCompleted: false}];
    // What it would it would like if you did not add the three dots before todos
    // [["something", "something else"], "some todo"]
    // With the three dots also called the spread operator 
    // ["something", "something else", "some todo"]
    setTodos(newTodos); // to update
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos); //to update
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="todo-list">
        <h1>My todo list</h1>
        {todos.map((todo, index) => (
        <TodoItem todo={todo} key={index} index={index} completeTodo={completeTodo} removeTodo={removeTodo}/>
        ))} 
        <TodoForm addTodo={addTodo}/>
      </div>
    </div>
  );
    
}

export default App;
 //map loop through an array and do something to each item and return it