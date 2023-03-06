import TodosPage from "./pages/todos-page";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TodoDetail from "./pages/todo-detail";

const router = createBrowserRouter([
  {
    path: "/todo-app",
    element: <TodosPage />,
    children: [
      {
        path: "sub-path",
        element: <h1>Sub path of todo</h1>,
      },
    ],
  },
  {
    path: "/todo-app/:id",
    element: <TodoDetail />,
  },
  {
    path: "/hello",
    element: <h1>Hello User</h1>,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
