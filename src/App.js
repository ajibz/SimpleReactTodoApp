import "./styles.css";
import { Nav } from "./Nav";
import Home from "./home";
import About from "./about";
import Todo from "./Todo";
import { BrowserRouter, Route, Link, Routes, Switch } from "react-router-dom";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <nav style={{ display: "flex", justifyContent: "center" }}>
            <Link to="/">Home</Link>
            <Link to="/about" style={{ marginLeft: 15 }}>
              About
            </Link>
            <Link to="/Todo" style={{ marginLeft: 15 }}>
              Todo
            </Link>
          </nav>
        </div>
        <center>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/Todo" element={<Todo />} />
          </Routes>
        </center>
      </BrowserRouter>
    </div>
  );
};
export default App;
