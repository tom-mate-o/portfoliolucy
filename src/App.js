import "./App.css";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useRef } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState, useEffect } from "react";
import Intro from "./components/intro";
import About from "./components/about";
import Noseproject from "./components/noseproject";
import Publications from "./components/publications";
import Cv from "./components/cv";
import Contact from "./components/contact";
import Footer from "./components/footer";

function App() {
  const ref = useRef(null);


  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [scroll, setScroll] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setScroll({ x: window.scrollX, y: window.scrollY });
  }, [isOpen]);

  return (
    <LocomotiveScrollProvider
      options={{ smooth: true }}
      watch={[isOpen, scroll]}
      containerRef={ref}
    >
      <main data-scroll-container ref={ref}>
        <div
          className={`hamburger${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <MenuIcon />
        </div>

        <div className={`hamburgernavbar${isOpen ? "open" : ""}`}>
          <div className="hamburgerlinks">
            <li>
              <a href="#intro" data-scroll-to>
                HOME
              </a>
            </li>
            <li>
              <a href="#about" data-scroll-to>
                ABOUT
              </a>
            </li>
            <li>
              <a href="#noseproject" data-scroll-to>
                NoSe PROJECT
              </a>
            </li>
            <li>
              <a href="#publications" data-scroll-to>
                PUBLICATIONS
              </a>
            </li>
            <li>
              <a href="#cv" data-scroll-to>
                CV
              </a>
            </li>
            <li>
              <a href="#contact" data-scroll-to>
                CONTACT
              </a>
            </li>
          </div>
        </div>

        <div className="header">
          <div className="Title">LUCIA KRANAWETTER</div>
          <div className="navbar">
            <li>
              <a href="#intro" data-scroll-to>
                HOME
              </a>
            </li>
            <li>
              <a href="#about" data-scroll-to>
                ABOUT
              </a>
            </li>
            <li>
              <a href="#noseproject" data-scroll-to>
                NoSe PROJECT
              </a>
            </li>
            <li>
              <a href="#publications" data-scroll-to>
                PUBLICATIONS
              </a>
            </li>
            <li>
              <a href="#cv" data-scroll-to>
                CV
              </a>
            </li>
            <li>
              <a href="#contact" data-scroll-to>
                CONTACT
              </a>
            </li>
          </div>
        </div>

        <section className="intro" data-scroll-section id="intro">
          <Intro />
        </section>

        <section className="about" data-scroll-section id="about">
          <About />
        </section>

        <section className="noseproject" data-scroll-section id="noseproject">
          <Noseproject />
        </section>

        <section className="publications" data-scroll-section id="publications">
          <Publications />
        </section>

        <section className="cv" data-scroll-section id="cv">
          <Cv />
        </section>

        <section className="contact" data-scroll-section id="contact">
          <Contact />
        </section>

        <section className="footer" data-scroll-section id="footer">
          <Footer />
        </section>
      </main>
    </LocomotiveScrollProvider>
  );
}
export default App;
