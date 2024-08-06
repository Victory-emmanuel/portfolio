import PortfolioPg from "./pages/PortfolioPg";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/PortfolioPg" element={<PortfolioPg />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
