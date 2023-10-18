import "./App.css";
import { createContext, useState } from "react";
import { Navbar } from "./main-components/Navbar";
import { Home } from "./main-components/Home";
import { About } from "./main-components/About";
import { Projects } from "./main-components/Projects";
import { Contact } from "./main-components/Contact";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Sidebar } from "./main-components/Sidebar";
import { Sidebar2 } from "./main-components/Sidebar2";
import { NavbarResponsive } from "./main-components/NavbarResponsive";

export const NavContext = createContext();

function App() {
  const [showResNav, setShowResNav] = useState(false);
  return (
    <>
      <div className="gradient__bg">
        <HashRouter>
          <NavContext.Provider value={{ showResNav, setShowResNav }}>
            <NavbarResponsive />
            <Navbar />
          </NavContext.Provider>
          <Sidebar />
          <Sidebar2 />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>

          <About className={"section2"} />
          <Projects className={"section3"} />
          <Contact className={"section4"} />
        </HashRouter>
      </div>
    </>
  );
}

export default App;
