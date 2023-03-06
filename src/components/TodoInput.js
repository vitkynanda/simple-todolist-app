import { Stack, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import React, { useEffect, useState } from "react";
import { useTodoStore } from "../store/todo-store";

const defaultTodoState = { task_name: "", task_status: 0 };

const TodoInput = () => {
  const { selectedTodo, handleAddTodo, handleEditTodo } = useTodoStore();
  const [todo, setTodo] = useState(defaultTodoState);
  const handleChangeInput = (e) =>
    setTodo({ ...todo, task_name: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    selectedTodo.id ? handleEditTodo(todo) : handleAddTodo(todo);
    setTodo(defaultTodoState);
  };

  useEffect(() => {
    selectedTodo.id && setTodo(selectedTodo);
  }, [selectedTodo]);

  return (
    <Stack
      component="form"
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      my={2}
      onSubmit={handleSubmit}
    >
      <TextField
        value={todo.task_name}
        onChange={handleChangeInput}
        size="small"
        label={selectedTodo.id ? "Edit Todo" : "Add Todo"}
        sx={{ width: "75%" }}
      />
      <Button type="submit" variant="contained">
        {selectedTodo.id ? "Edit Todo" : "Add Todo"}
      </Button>
    </Stack>
  );
};

export default TodoInput;
