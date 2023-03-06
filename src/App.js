import TodosPage from "./pages/todos-page";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TodoDetail from "./pages/todo-detail";
import { Typography } from "@mui/material";

const router = createBrowserRouter([
  {
    path: "/todo-app",
    element: <TodosPage />,
    children: [
      {
        path: "sub-path",
        element: <Typography>Sub path of todo</Typography>,
      },
    ],
  },
  {
    path: "/todo-app/:id",
    element: <TodoDetail />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
