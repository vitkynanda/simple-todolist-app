import { Stack, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import React, { useEffect, useState } from "react";
import { getUUID } from "../utils";

const TodoInput = ({ onAdd, onEdit, selectedTodo }) => {
  const [todo, setTodo] = useState({ name: "" });
  const handleChangeInput = (e) => setTodo({ ...todo, name: e.target.value });
  const handleAddTodo = () => {
    setTodo({ name: "" });
    onAdd({ ...todo, id: getUUID() });
  };
  const handleEditTodo = () => {
    setTodo({ name: "" });
    onEdit(todo);
  };

  useEffect(() => {
    selectedTodo.id && setTodo(selectedTodo);
  }, [selectedTodo]);

  return (
    <Stack direction="row" alignItems="center" spacing={2} my={2}>
      <TextField
        value={todo.name}
        onChange={handleChangeInput}
        size="small"
        label={selectedTodo.id ? "Edit Todo" : "Add Todo"}
        sx={{ width: "70%" }}
      />
      <Button
        onClick={selectedTodo.id ? handleEditTodo : handleAddTodo}
        variant="contained"
      >
        {selectedTodo.id ? "Edit Todo" : "Add Todo"}
      </Button>
    </Stack>
  );
};

export default TodoInput;
