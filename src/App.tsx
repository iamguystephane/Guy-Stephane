import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import ContactPage from "./components/contact/Contact";
import NavBar from "./components/NavBar";
import MenuModal from "./components/MenuModal";
import { useState } from "react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <BrowserRouter>
      <MenuModal isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <div className="bg-gradient-to-b from-white to-gray-100 dark:from-black dark:to-gray-800 px-4 transition-all duration-500">
        <NavBar onOpen={() => setIsMenuOpen(true)} />
        <div className="xsm:!px-4 md:!px-8 lg:!px-16 !mt-16 2xl:w-3/4 !mx-auto">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
