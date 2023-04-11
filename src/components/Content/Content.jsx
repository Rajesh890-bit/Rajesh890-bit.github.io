import React from "react";
import "./Content.css";
import ParticleHeaderBg from "../ParticlesBg/ParticlesHeader/ParticleHeaderBg";

/* ReactScroll */
import { Link } from "react-scroll";

/* Multi idioma */
import { FormattedMessage } from "react-intl";
import { FaLinkedin, FaWhatsapp, FaGithub, FaGoogle } from "react-icons/fa";

const Content = () => (
  <div className="contenido">
    <ParticleHeaderBg />
    <section className="inicio" id="inicio">
      <div className="titulo">
        <p data-aos="fade-up" data-aos-delay="600">
          <FormattedMessage id="greeting" defaultMessage="Hello" />
        </p>
        <h1 data-aos="fade-up" data-aos-delay="800">
          I am Rajesh Pradhan
        </h1>
        <p data-aos="fade-up" data-aos-delay="1000">
          <FormattedMessage id="rol" defaultMessage="Full-stack developer" />
        </p>
        <div className="wrapper">
          <a
            className="button"
            href="https://www.linkedin.com/in/rajesh-pradhan-027907219/"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
            data-aos-delay="1200"
          >
            <div className="icon">
              <i className="fab fa-linkedin">
                {" "}
                <FaLinkedin />
              </i>
            </div>
            <span>Linkedin</span>
          </a>
          <a
            className="button"
            href="https://github.com/Rajesh890-bit"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
            data-aos-delay="1400"
          >
            <div className="icon">
              <i className="fab fa-github">
                <FaGithub />
              </i>
            </div>
            <span>Github</span>
          </a>
          <a
            className="button"
            href="mailto:pradhan143rajesh@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
            data-aos-delay="1600"
          >
            <div className="icon">
              <i className="fab fa-gmail">
                <FaGoogle />
              </i>
            </div>
            <span>Gmail</span>
          </a>
          <a
            className="button"
            href="https://api.whatsapp.com/send?phone=7735596685"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
            data-aos-delay="1800"
          >
            <div className="icon">
              <i className="fab fa-whatsapp">
                <FaWhatsapp />
              </i>
            </div>
            <span>Whatsapp</span>
          </a>
        </div>

        <Link to="sobre-mi" href="#sobre-mi">
          <div className="scroll-down"></div>
        </Link>
      </div>
    </section>
  </div>
);

export default Content;
