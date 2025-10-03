import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import ContactPage from "./components/contact/Contact";
import NavBar from "./components/NavBar";
import MenuModal from "./components/MenuModal";

export default function App() {
  return (
    <BrowserRouter>
      <MenuModal />
      <div className="bg-gradient-to-b dark:from-black dark:to-gray-800 px-4 text-white">
        <NavBar />
        <div className="xsm:!px-4 md:!px-8 lg:!px-16 !mt-20">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
