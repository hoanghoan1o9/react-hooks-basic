import React, { useState, useEffect } from "react";
import "./App.scss";
// import TodoList from "./Components/TodoList";
// import TodoForm from "./Components/TodoForm";
import PostList from "./Components/PostList";

function App() {
  // const [todoList, setTodoList] = useState([
  //   { id: 1, title: "I love you" },
  //   { id: 2, title: "I love you so much" },
  //   { id: 3, title: "I love you too " },
  // ]);

  const [postList, setPostList] = useState([]);

        // can use many useEffect in a component

  useEffect(() => {
    async function fetchPostList() {  // use async in useEffect  and try catch to handler error if fails 
      try {
        const requestUrl =
          "http://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1";
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();
        console.log({ responseJSON });

        const { data } = responseJSON;
        setPostList(data);
      } catch (error) {
        console.log('fail to fetch post list', error);
      }
    }
    console.log("post list effect")
    fetchPostList();
  }, []);   // empty array dependecy => this useEffect only render 1 time 

  useEffect(() => {
    console.log('Todo list effect')
  });      // no dependency => will re-render when the app render || alway render 

  // const HandlerTodoClick = (todo) => {
  //   console.log(todo);
  //   const index = todoList.findIndex((x) => x.id === todo.id);
  //   if(index < 0) return;

  //   const newTodoList = [...todoList]
  //   newTodoList.splice(index, 1);
  //   setTodoList(newTodoList);
  // };

  // function handleTodoFormSubmit(formValue) {
  //   // thêm một todo mới vào todo hiện tại

  //   const newTodo = {
  //     id: todoList.length + 1,
  //     ...formValue, // lấy hết tất cả giá trị có trong formValue
  //   };
  //   const newTodoList = [...todoList];
  //   newTodoList.push(newTodo);
  //   setTodoList(newTodoList);

  // }

  return (
    <div className="app">
      <h1>React PostList</h1>
      {/* <TodoForm onSubmit={handleTodoFormSubmit} />
      <TodoList todos={todoList} onTodoClick={HandlerTodoClick} /> */}
      <PostList posts={postList} />
    </div>
  );
}

export default App;
