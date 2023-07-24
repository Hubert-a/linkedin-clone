import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Header from "./components/Header";
import Home from "./components/Home"

export default function App() {
  return (
    <div className="main--elements">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={[<Header />,<Home/>]}/>
        </Routes>
      </Router>
    </div>
  );
}
