import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* --- Routes publiques --- */}
        <Route path="/" />
        <Route path="/vegetables" />
        <Route path="/gallery" />
        <Route path="/admin" />
      </Routes>
    </div>
  );
}

export default App;
