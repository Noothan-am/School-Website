import About from "./pages/About";
import Academics from "./pages/Academics";
import Admissions from "./pages/Admissions";
import Home from "./pages/Home";
import "./App.css";

import { Routes, Route } from "react-router-dom";
import Departments from "./pages/Departments";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/academics" element={<Academics />} />
      <Route path="/departments" element={<Departments />} />
    </Routes>
  );
}

export default App;
