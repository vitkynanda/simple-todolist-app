import React from "react";
import {
  Stack,
  Checkbox,
  Typography,
  IconButton,
  Tooltip,
} from "@mui/material";
import { Delete, Edit, RemoveRedEye } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useTodoStore } from "../store/todo-store";

const TodoItem = ({ todo }) => {
  const navigate = useNavigate();
  const { selectedTodo, handleDeleteTodo, handleSetEditTodo, handleEditTodo } =
    useTodoStore();

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
        <Tooltip title="Show Detail">
          <IconButton onClick={() => navigate(`/todo-app/${todo.id}`)}>
            <RemoveRedEye />
          </IconButton>
        </Tooltip>
      </Stack>
    </Stack>
  );
};

export default TodoItem;
