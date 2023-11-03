import "./App.css";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useRef } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState, useEffect } from "react";

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
          <img
            className="avatar"
            src="/assets/lucy_avatar.jpg"
            alt="Lucy in front of Pelagia"
          ></img>
          <a href="#intro" data-scroll-to>
            <h1>HI, I'M LUCY!</h1>
          </a>

          <p>
            I'm a Ocean Scientist and PhD Candidate at NIOZ in the Netherhlands.
          </p>
        </section>

        <section className="about" data-scroll-section id="about">
          <a href="#about" data-scroll-to>
            <h1>ABOUT ME</h1>
          </a>
        </section>

        <section className="noseproject" data-scroll-section id="noseproject">
          <a href="#noseproject" data-scroll-to>
            <h1>NoSe PROJECT</h1>
          </a>
        </section>

        <section className="publications" data-scroll-section id="publications">
          <a href="#publications" data-scroll-to>
            <h1>PUBLICATIONS</h1>
          </a>
        </section>

        <section className="cv" data-scroll-section id="cv">
          <a href="#cv" data-scroll-to>
            <h1>CV</h1>
          </a>
        </section>

        <section className="contact" data-scroll-section id="contact">
          <a href="#contact" data-scroll-to>
            <h1>CONTACT</h1>
          </a>
        </section>

        <section className="footer" data-scroll-section id="footer">
          <a href="#footer" data-scroll-to>
            <h1>FOOTER</h1>
          </a>
        </section>
      </main>
    </LocomotiveScrollProvider>
  );
}
export default App;
