import About from "./pages/About";
import Academics from "./pages/Academics";
import Admissions from "./pages/Admissions";
import Home from "./pages/Home";
import "./App.css";

import { Routes, Route } from "react-router-dom";
import Departments from "./pages/Departments";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Lookbook from "./components/Lookbook";
import Achievements from "./components/Achievements";
import Events from "./components/Events";
import Facilities from "./components/Facilities";
import ClassRoom from "./components/ClassRoom";
import Campus from "./components/Campus";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Lookbook />} />
        <Route path="/about" element={<About />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="/admission" element={<Admissions />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/campus" element={<Campus />} />
        <Route path="/events" element={<Events />} />
        <Route path="/classroom" element={<ClassRoom />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
