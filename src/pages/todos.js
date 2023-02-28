import React, { useState } from "react";
import { Box, Card, Typography } from "@mui/material";
import TodoItem from "../components/TodoItem";
import TodoInput from "../components/TodoInput";

const containerStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
};

const cardStyle = {
  p: 5,
  borderRadius: 6,
};

const TodosPage = () => {
  const [todos, setTodos] = useState([]);
  const [selectedTodo, setSelectedTodo] = useState({});
  const handleAddTodo = (todo) => setTodos([todo, ...todos]);
  const handleSetEditTodo = (todo) => setSelectedTodo(todo);
  const handleEditTodo = (editedTodo) => {
    const updatedTodo = todos.map((todo) => ({
      ...todo,
      name: todo.id === editedTodo.id ? editedTodo.name : todo.name,
    }));
    setTodos(updatedTodo);
    setSelectedTodo({});
  };
  const handleDeleteTodo = (deletedTodo) => {
    const updatedTodo = todos.filter((todo) => todo.id !== deletedTodo.id);
    setTodos(updatedTodo);
  };

  return (
    <Box sx={containerStyle}>
      <Card sx={cardStyle}>
        <Typography variant="h5" fontWeight="bold">
          Simple Todo List App
        </Typography>
        <TodoInput
          onEdit={handleEditTodo}
          onAdd={handleAddTodo}
          selectedTodo={selectedTodo}
        />
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onSetEdit={handleSetEditTodo}
            onDelete={handleDeleteTodo}
            selectedTodo={selectedTodo}
          />
        ))}
      </Card>
    </Box>
  );
};

export default TodosPage;
