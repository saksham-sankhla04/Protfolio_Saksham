import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Banner from "./components/Banner.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Banner />
    <About />
    <Projects />
    <Contact />
  </StrictMode>
);
