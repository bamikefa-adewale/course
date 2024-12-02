import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import NavBar from "./Navcomponet/NavBar";
import Login from "./page/Login";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
