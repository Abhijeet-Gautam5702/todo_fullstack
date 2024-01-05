import React, { useEffect, useState } from "react";
import DisplayList from "./DIsplayList";
import InputForm from "./InputForm";

export default function App() {
  const [todoList, setTodoList] = useState([]);

  async function fetchData() {
    const res = await fetch("http://localhost:3000/user/todos");
    const data = await res.json();
    setTodoList(data["Incomplete Todos"]);
  }

  useEffect(() => {
    fetchData();
  }, []);

  async function addNewTodo(newTodo) {
    // const list = [...todoList, newTodo];
    await fetch("http://localhost:3000/user/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: newTodo.title,
        description: newTodo.desc,
      }),
    });
    // setTodoList(list);
  }

  async function handleSubmit(newTodo) {
    await addNewTodo(newTodo);
    await fetchData();
  }

  return (
    <div>
      <h1>Todo List</h1>
      <InputForm handleSubmit={handleSubmit} />
      <DisplayList items={todoList} fetchData={fetchData} />
    </div>
  );
}
