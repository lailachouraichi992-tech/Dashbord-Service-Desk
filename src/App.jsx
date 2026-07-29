import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/dashboard";
import Ticketsenattente from "./components/ticketsenattente";





function App() {
  return (
    <Routes>

      <Route path="/" element={<Dashboard />} />

      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/ticketsenattente" element={<Ticketsenattente />} />
    </Routes>
  );
}

export default App;