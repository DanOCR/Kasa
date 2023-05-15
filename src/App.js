import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import APropos from "./pages/APropos";
import NavBar from "./components/NavBar";
import Erreur from "./pages/Erreur";
import Footer from "./components/Footer";
import Apartment from "./pages/Apartment";


function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/A-Propos" element={<APropos />} />
        <Route path="*" element={<Erreur />} />
        <Route path="/erreur" element={<Erreur />} />
        <Route path="/apartment/:id" element={<Apartment />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
