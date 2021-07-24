import React, { useState } from "react";
import "./App.scss";
import TodoList from "./Components/TodoList";

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "I love you" },
    { id: 2, title: "I love you so much" },
    { id: 3, title: "I love you too " },
  ]);

  const HandlerTodoClick = (todo) => {
    console.log(todo);
    const index = todoList.findIndex((x) => x.id === todo.id);
    if(index < 0) return;

    const newTodoList = [...todoList]
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  };
  return (
    <div className="app">
      <h1>React hooks</h1>
      <TodoList todos={todoList} onTodoClick={HandlerTodoClick} />
    </div>
  );
}

export default App;
