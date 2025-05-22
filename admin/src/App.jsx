// src/App.jsx
import Navbar from "./components/Navbar";
import Admin from "./pages/Admin";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <main className="bg-primary text-tertiary">
      <Navbar />
      <Routes>
        <Route path="/*" element={<Admin />} />
        <Route path="/" element={<Navigate to="/login" replace />} />
      </Routes>
    </main>
  );
}

export default App;
