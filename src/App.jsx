import { BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar"; // Adjust path as necessary

function App() {
  return (
    <Router>
      <Navbar />
      <Routes></Routes>
    </Router>
  );
}

export default App;
