import React, { useEffect } from "react";
import TodoItem from "../components/TodoItem";
import TodoInput from "../components/TodoInput";
import { Outlet } from "react-router-dom";
import { useTodoStore } from "../store/todo-store";
import Layout from "../components/Layout";

const TodosPage = () => {
  const { todos, getTodos } = useTodoStore();

  useEffect(() => {
    getTodos();
  }, [getTodos]);

  return (
    <Layout title="Simple Todo App">
      <TodoInput />
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
      <Outlet />
    </Layout>
  );
};

export default TodosPage;
