import React, { createContext, useEffect, useState } from "react";
import { addTodo, deleteTodo, getTodos, updateTodo } from "../services/api";

export const TodoContext = createContext({
  todos: [],
  selectedTodo: {},
  handleAddTodo: () => {},
  handleSetEditTodo: () => {},
  handleEditTodo: () => {},
  handleDeleteTodo: () => {},
});

const TodoContextProvider = ({ children }) => {
  const [refetch, setRefetch] = useState(false);
  const [todos, setTodos] = useState([]);
  const [selectedTodo, setSelectedTodo] = useState({});

  const handleAddTodo = async (todo) => {
    const res = await addTodo(todo);
    if (res.status_code === 201) setRefetch(!refetch);
  };

  const handleEditTodo = async ({ id, task_name, task_status }) => {
    const res = await updateTodo(id, {
      task_name,
      task_status,
    });
    if (res.status_code === 200) setRefetch(!refetch);
    setSelectedTodo({});
  };

  const handleDeleteTodo = async (todoId) => {
    const res = await deleteTodo(todoId);
    if (res.status_code === 200) setRefetch(!refetch);
  };

  const handleSetEditTodo = (todo) => setSelectedTodo(todo);

  useEffect(() => {
    (async () => {
      const res = await getTodos();
      if (res.status_code === 200) setTodos(res.data);
    })();
  }, [refetch]);

  return (
    <TodoContext.Provider
      value={{
        todos,
        selectedTodo,
        handleAddTodo,
        handleSetEditTodo,
        handleEditTodo,
        handleDeleteTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
