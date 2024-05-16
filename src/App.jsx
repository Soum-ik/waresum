import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/HomePage";
import AboutMe from "./components/pages/AboutMePage";
import BlogPage from "./components/pages/BlogPage";
import PortfolioPage from "./components/pages/PortfolioPage";
import ContactPage from "./components/pages/ContactPage";
import ResumePage from "./components/pages/ResumePage";
export default function App() {
  return (
    <div className="mx-auto  ">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/blog" element={<BlogPage />} />
          
        <Route path="/Contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
}
