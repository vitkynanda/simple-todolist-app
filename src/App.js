import TodoContextProvider from "./context/todo-context";
import TodosPage from "./pages/todos-page";

function App() {
  return (
    <TodoContextProvider>
      <TodosPage />
    </TodoContextProvider>
  );
}

export default App;
