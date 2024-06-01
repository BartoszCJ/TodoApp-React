import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import ToDoApp from "./routes/pages/TodoApp";
import Navbar from "./routes/navbar/Navbar";
import Hello from "./routes/pages/Hello";
import Autorzy from "./routes/pages/Autor";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hello />} />
          <Route path="/todo" element={<ToDoApp />} />
          <Route path="/autor" element={<Autorzy />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
