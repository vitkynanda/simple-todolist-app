import React, { useState } from "react";
import {
  Stack,
  Checkbox,
  Typography,
  IconButton,
  Tooltip,
} from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";

const TodoItem = ({ todo, onDelete, onSetEdit, selectedTodo }) => {
  const [checked, setChecked] = useState(false);
  return (
    <Stack direction="row" alignItems="center" justifyContent="space-between">
      <Stack direction="row" alignItems="center" spacing={2}>
        <Checkbox
          disabled={todo.id === selectedTodo.id}
          checked={checked}
          onChange={() => setChecked(!checked)}
        />
        <Typography sx={{ textDecoration: checked ? "line-through" : "none" }}>
          {todo.name}
        </Typography>
      </Stack>
      <Stack direction="row" spacing={1}>
        <Tooltip title="Edit">
          <IconButton disabled={checked} onClick={() => onSetEdit(todo)}>
            <Edit />
          </IconButton>
        </Tooltip>
        <Tooltip title="Delete">
          <IconButton
            disabled={todo.id === selectedTodo.id}
            onClick={() => onDelete(todo)}
          >
            <Delete />
          </IconButton>
        </Tooltip>
      </Stack>
    </Stack>
  );
};

export default TodoItem;
