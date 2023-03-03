import TodoContextProvider from "./context/todo-context";
import TodosPage from "./pages/todos";

function App() {
  return (
    <TodoContextProvider>
      <TodosPage />
    </TodoContextProvider>
  );
}

export default App;
