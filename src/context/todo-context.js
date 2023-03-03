import React, { createContext, useState } from "react";

export const TodoContext = createContext({
  todos: [],
  selectedTodo: {},
  handleAddTodo: () => {},
  handleSetEditTodo: () => {},
  handleEditTodo: () => {},
  handleDeleteTodo: () => {},
});

const TodoContextProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [selectedTodo, setSelectedTodo] = useState({});
  const handleAddTodo = (todo) => setTodos([todo, ...todos]);
  const handleSetEditTodo = (todo, todoIndex) =>
    setSelectedTodo({ ...todo, todoIndex });
  const handleEditTodo = (editedTodo, todoIndex) => {
    const values = [...todos];
    values[todoIndex].name = editedTodo.name;
    setTodos(values);
    setSelectedTodo({});
  };
  const handleDeleteTodo = (index) => {
    const values = [...todos];
    values.splice(index, 1);
    setTodos(values);
  };

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
