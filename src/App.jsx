import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Header from "./components/Header";
import Weather from "./components/Weather";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Background from "./assets/background.jpg";

export default function App() {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen text-white font-orbitron relative">
      <div
        className="fixed top-0 left-0 w-full h-full -z-10 bg-cover bg-center animate-ken-burns"
        style={{ backgroundImage: `url(${Background})` }}
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 -z-10" />
      
      <Header />
      <main className="flex-grow w-full z-10">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Weather />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}