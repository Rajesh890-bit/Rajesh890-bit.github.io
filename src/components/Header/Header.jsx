import React, { useContext } from "react";
import "./Header.css";
/* ReactScroll */
import { Link } from "react-scroll";
import { HamburgerIcon } from "@chakra-ui/icons";
/* React router */
import { NavLink } from "react-router-dom";

/* DarkMode */
import DarkMode from "../DarkMode/DarkMode";

/* Language */
import { FormattedMessage } from "react-intl";

import { Flex } from "@chakra-ui/react";
import { ButtomGet } from "../ButtomGet/ButtomGet";

import "../ButtomGet/buttom.css";
// import pdf from "../../Asset/Rajesh_Pradhan_Resume.pdf";
const Header = () => {
  // Buttom language

  // Menu desplegable
  const menuDesplegable = () => {
    let navbar = document.querySelector(".navbar");
    navbar.classList.toggle("activar");

    window.onscroll = () => {
      if (window.scrollY > 0) {
        document.querySelector(".site-header").classList.add("activar");
      } else document.querySelector(".site-header").classList.remove("activar");

      navbar.classList.remove("activar");
    };
  };

  //pdf open
  const OpenPDF = () => {
    const url = `https://drive.google.com/file/d/1KVEDHYtMddALFwpVm_P1rS7PtZtlTT4B/view?usp=share_link`;

    window.open(url, "_blank");
  };

  return (
    <header className="site-header" id="nav-menu">
      <div id="menu-btn" className="fas fa-bars" onClick={menuDesplegable}>
        <HamburgerIcon />{" "}
      </div>

      <NavLink className="logo" to="/">
        <p>
          (<span>Rajesh</span>)
        </p>
      </NavLink>

      <nav className="navbar flex-colum">
        <Link to="inicio" spy={true} offset={-150} href="#inicio">
          <FormattedMessage
            id="home"
            defaultMessage="Home"
            class="nav-link home"
          />
        </Link>
        <Link to="sobre-mi" spy={true} offset={-150} href="#sobre-mi">
          <FormattedMessage
            id="about"
            defaultMessage="About me"
            class="nav-link about"
          />
        </Link>
        <Link to="servicios" spy={true} offset={-150} href="#servicios">
          <FormattedMessage
            id="services"
            defaultMessage="Services"
            class="nav-link skills"
          />
        </Link>
        <Link to="projects" spy={true} offset={-150} href="#projects">
          <FormattedMessage
            id="projects"
            defaultMessage="Projects"
            class="nav-link projects"
          />
        </Link>
        <Link to="contact" spy={true} offset={-150} href="#contact">
          <FormattedMessage
            id="contact"
            defaultMessage="Contact"
            class="nav-link contact"
          />
        </Link>
        <div>
          <a
            id="resume-link-1"
            isExternal
            href="Rajesh_Pradhan_Resume.pdf"
            download="Rajesh_Pradhan_Resume.pdf"
            class="nav-link resume"
          >
            <ButtomGet
              id="resume-button-1"
              resumeUrl="https://drive.google.com/file/d/1KVEDHYtMddALFwpVm_P1rS7PtZtlTT4B/view?usp=share_link"
              resumeFileName={"Rajesh_Pradhan"}
            />
          </a>
        </div>
      </nav>
      <div className="switch" id="switch">
        <Flex>
          <DarkMode />
        </Flex>
      </div>
    </header>
  );
};

export default React.memo(Header);
