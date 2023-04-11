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
    <header className="site-header">
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
          <FormattedMessage id="home" defaultMessage="Home" />
        </Link>
        <Link to="sobre-mi" spy={true} offset={-150} href="#sobre-mi">
          <FormattedMessage id="about" defaultMessage="About me" />
        </Link>
        <Link to="servicios" spy={true} offset={-150} href="#servicios">
          <FormattedMessage id="services" defaultMessage="Services" />
        </Link>
        <Link to="proyectos" spy={true} offset={-150} href="#proyectos">
          <FormattedMessage id="projects" defaultMessage="Projects" />
        </Link>
        <Link to="contactos" spy={true} offset={-150} href="#contactos">
          <FormattedMessage id="contact" defaultMessage="Contact" />
        </Link>
        <div>
          <a
            id="resume-link-1"
            isExternal
            href="Rajesh_Pradhan_Resume.pdf"
            download="Rajesh_Pradhan_Resume.pdf"
          >
            <ButtomGet
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
