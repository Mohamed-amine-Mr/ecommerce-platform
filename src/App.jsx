<<<<<<< HEAD
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/layout/Navbar";
// import Footer from "./components/layout/Footer";
// import Home from "./pages/Home";

// function App() {
//   return (
//     <Router>
//       <div className="flex flex-col min-h-screen">
//         <Navbar />
//         <main className="flex-grow">
//           <Routes>
//             <Route path="/" element={<Home />} />
//           </Routes>
//         </main>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;
// App.js
=======
>>>>>>> 48193fd (adding context API)
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
<<<<<<< HEAD
import "./index.css"; // Import your main CSS file

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-light">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
=======
import "./index.css";
import { CartProvider } from "./components/CartContext";

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="flex flex-col min-h-screen bg-light">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
>>>>>>> 48193fd (adding context API)
  );
}

export default App;
