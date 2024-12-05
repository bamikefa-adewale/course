import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import NavBar from "./Navcomponet/NavBar";
import Login from "./page/Login";
import SignUp from "./page/SignUp";
import DashBoard from "./page/DashBoard";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="dashboard" element={<DashBoard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
