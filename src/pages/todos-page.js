import React, { useEffect } from "react";
import { Box, Card, Typography } from "@mui/material";
import TodoItem from "../components/TodoItem";
import TodoInput from "../components/TodoInput";
import { Outlet } from "react-router-dom";
import { useTodoStore } from "../store/todo-store";

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
  const { todos, getTodos } = useTodoStore();

  useEffect(() => {
    getTodos();
  }, [getTodos]);

  return (
    <Box sx={containerStyle}>
      <Outlet />
      <Card sx={cardStyle}>
        <Typography componont="p" variant="h5" fontWeight="bold">
          Simple Todo List App
        </Typography>
        <TodoInput />
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </Card>
    </Box>
  );
};

export default TodosPage;
