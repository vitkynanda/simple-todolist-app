import callApi from "../config";

export const getTodos = () => callApi({ path: `/task`, method: "GET" });
export const getTodoDetail = (todoId) =>
  callApi({ path: `/task/${todoId}`, method: "GET" });
export const addTodo = (payload) =>
  callApi({ path: `/task`, method: "POST", payload });
export const updateTodo = (todoId, payload) =>
  callApi({ path: `/task/${todoId}`, method: "PUT", payload });
export const deleteTodo = (todoId) =>
  callApi({ path: `/task/${todoId}`, method: "DELETE" });
