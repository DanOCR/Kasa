import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NavBar from "./components/NavBar";
import Error from "./pages/Error";
import Footer from "./components/Footer";
import Apartment from "./pages/Apartment";


function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
        <Route path="/erreur" element={<Error />} />
        <Route path="/apartment/:id" element={<Apartment />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
