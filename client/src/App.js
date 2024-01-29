import About from "./pages/About";
import Academics from "./pages/Academics";
import Admissions from "./pages/Admissions";
import Home from "./pages/Home";
import "./App.css";

import { Routes, Route } from "react-router-dom";
import Departments from "./pages/Departments";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="/admission" element={<Admissions />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
