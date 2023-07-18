import { Route, Routes } from "react-router-dom";
import "./App.css";
import Vegetables from "./pages/Vegetables";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import AdminLogin from "./pages/AdminLogin";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        {/* --- Routes publiques --- */}
        <Route path="/home" element={<Home />} />
        <Route path="/vegetables" element={<Vegetables />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/admin" element={<AdminLogin />} />
      </Routes>
    </div>
  );
}

export default App;
