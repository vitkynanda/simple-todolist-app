import { create } from "zustand";
import { addTodo, deleteTodo, getTodos, updateTodo } from "../services/api";

const initialState = { todos: [], selectedTodo: {} };

export const useTodoStore = create((set, get) => ({
  ...initialState,
  handleAddTodo: async (todo) => {
    const res = await addTodo(todo);
    if (res.status_code === 201) get().getTodos();
  },
  handleSetEditTodo: (todo) => set({ selectedTodo: todo }),
  handleEditTodo: async ({ id, task_name, task_status }) => {
    const res = await updateTodo(id, { task_name, task_status });
    if (res.status_code === 200) get().getTodos();
    set({ selectedTodo: {} });
  },
  handleDeleteTodo: async (todoId) => {
    const res = await deleteTodo(todoId);
    if (res.status_code === 200) get().getTodos();
  },
  getTodos: async (todo) => {
    const res = await getTodos(todo);
    if (res.status_code === 200) set({ todos: res.data });
  },
}));
