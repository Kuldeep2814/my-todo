import "./App.css";
import TodoWrapper from "./components/TodoWrapper.js";

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <h1>To-Do List</h1>
      </header>
      <main className="main-content">
        <TodoWrapper />
      </main>
      <footer className="app-footer">
        <p>© 2024 To-Do List App</p>
      </footer>
    </div>
  );
}

export default App;
