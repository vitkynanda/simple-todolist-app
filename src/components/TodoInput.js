import { Stack, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import React, { useContext, useEffect, useState } from "react";
import { TodoContext } from "../context/todo-context";

const defaultTodoState = { task_name: "", task_status: 0 };

const TodoInput = () => {
  const {
    selectedTodo,
    handleAddTodo: onAdd,
    handleEditTodo: onEdit,
  } = useContext(TodoContext);

  const [todo, setTodo] = useState(defaultTodoState);
  const handleChangeInput = (e) =>
    setTodo({ ...todo, task_name: e.target.value });

  const handleAddTodo = (e) => {
    e.preventDefault();
    onAdd(todo);
    setTodo(defaultTodoState);
  };
  const handleEditTodo = (e) => {
    e.preventDefault();
    onEdit(todo, selectedTodo.todoIndex);
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
      spacing={2}
      my={2}
      onSubmit={selectedTodo.id ? handleEditTodo : handleAddTodo}
    >
      <TextField
        value={todo.task_name}
        onChange={handleChangeInput}
        size="small"
        label={selectedTodo.id ? "Edit Todo" : "Add Todo"}
        sx={{ width: "70%" }}
      />
      <Button
        type="submit"
        onClick={selectedTodo.id ? handleEditTodo : handleAddTodo}
        variant="contained"
      >
        {selectedTodo.id ? "Edit Todo" : "Add Todo"}
      </Button>
    </Stack>
  );
};

export default TodoInput;
