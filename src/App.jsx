import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import ParticlesBg from "./ParticlesBg";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";

export default function App() {
  return (
    <div style={{ minHeight: "100vh" }}>
      <ParticlesBg />
      <Navbar />

      <main className="content-layer">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
