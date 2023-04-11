import React from "react";
import "../../pages/Contact/ContactPage.css";
/* TypedJs */
import Typical from "react-typical";

/* Multi idioma */
import { FormattedMessage } from "react-intl";
import {
  FaLinkedin,
  FaWhatsapp,
  FaTelegramPlane,
  FaInstagram,
  FaGithub,
  FaGoogle,
} from "react-icons/fa";
const Contact = () => (
  <section className="contactos" id="contactos">
    <h2 className="heading">
      <FormattedMessage id="contact" defaultMessage="Contact" />
    </h2>
    <h3 className="titulo" data-aos="fade-left" data-aos-delay="300">
      <FormattedMessage id="contact-info" defaultMessage="Contact me by: " />
      <Typical
        className="site-contacto"
        loop={Infinity}
        wrapper="b"
        steps={[
          "Gmail",
          1500,
          "WhatsApp",
          1500,
          "Instragram",
          1500,
          "Telegram",
          1500,
          "Linkedin",
          1500,
          "Github",
          1500,
        ]}
      />
    </h3>

    <div className="icons">
      <a
        href="mailto:pradhan143rajesh@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        data-aos="zoom-in"
      >
        <div className="layer">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span className="fab fas fa-envelope">
            <FaGoogle />
          </span>
        </div>
        <div className="text">Gmail</div>
      </a>
      <a
        href="https://api.whatsapp.com/send?phone=7735596685"
        target="_blank"
        rel="noopener noreferrer"
        data-aos="zoom-in"
      >
        <div className="layer">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span className="fab fa-whatsapp">
            <FaWhatsapp />
          </span>
        </div>
        <div className="text">Whatsapp</div>
      </a>
      <a href="" target="_blank" rel="noopener noreferrer" data-aos="zoom-in">
        <div className="layer">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span className="fab fa-telegram">
            <FaTelegramPlane />
          </span>
        </div>
        <div className="text">telegram</div>
      </a>
      <a
        href="https://www.linkedin.com/in/rajesh-pradhan-027907219/"
        target="_blank"
        rel="noopener noreferrer"
        data-aos="zoom-in"
      >
        <div className="layer">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span className="fab fa-linkedin-in">
            <FaLinkedin />
          </span>
        </div>
        <div className="text">Linkedin</div>
      </a>
      <a
        href="https://github.com/Rajesh890-bit"
        target="_blank"
        rel="noopener noreferrer"
        data-aos="zoom-in"
      >
        <div className="layer">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span className="fab fa-github-square">
            <FaGithub />
          </span>
        </div>
        <div className="text">GitHub</div>
      </a>
    </div>
  </section>
);

export default React.memo(Contact);
