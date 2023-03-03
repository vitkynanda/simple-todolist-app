import React, { useContext } from "react";
import {
  Stack,
  Checkbox,
  Typography,
  IconButton,
  Tooltip,
} from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import { TodoContext } from "../context/todo-context";

const TodoItem = ({ todo }) => {
  const { selectedTodo, handleSetEditTodo, handleDeleteTodo, handleEditTodo } =
    useContext(TodoContext);

  return (
    <Stack direction="row" alignItems="center" justifyContent="space-between">
      <Stack direction="row" alignItems="center" spacing={2}>
        <Checkbox
          disabled={todo.id === selectedTodo.id}
          checked={todo.task_status === 1 ? true : false}
          onChange={() =>
            handleEditTodo({
              id: todo.id,
              task_name: todo.task_name,
              task_status: todo.task_status === 1 ? 0 : 1,
            })
          }
        />
        <Typography
          sx={{
            textDecoration: todo.task_status === 1 ? "line-through" : "none",
          }}
        >
          {todo.task_name}
        </Typography>
      </Stack>
      <Stack direction="row" spacing={1}>
        <Tooltip title="Edit">
          <IconButton
            disabled={todo.task_status === 1}
            onClick={() => handleSetEditTodo(todo)}
          >
            <Edit />
          </IconButton>
        </Tooltip>
        <Tooltip title="Delete">
          <IconButton
            disabled={todo.id === selectedTodo.id}
            onClick={() => handleDeleteTodo(todo.id)}
          >
            <Delete />
          </IconButton>
        </Tooltip>
      </Stack>
    </Stack>
  );
};

export default TodoItem;
