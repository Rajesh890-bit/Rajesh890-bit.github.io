import { Text } from "@chakra-ui/react";
import "../pages/About/AboutPage.css";
import { FormattedMessage } from "react-intl";
// import { FaLinkedin, FaWhatsapp, FaGithub, FaGoogle } from "react-icons/fa";
function SkillSection() {
  return (
    <div
      className="columns"
      data-aos="fade-left"
      data-aos-delay="650"
      style={{ textAlign: "center", color: "gray", fontSize: "3rem" }}
    >
      <Text style={{ color: "teal", fontSize: "5rem", fontWeight: "bold" }}>
        skills
      </Text>

      <h2>Front-End</h2>
      <div className="skill">
        <div>
          <img
            alt="HTML"
            className="icons-skils"
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"
          />
          <h5>HTML</h5>
        </div>
        <div>
          <img
            alt="CSS"
            className="icons-skils"
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"
          />
          <h5>CSS</h5>
        </div>
        <div>
          <img
            alt="Js"
            className="icons-skils"
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg"
          />
          <h5>JavaScript</h5>
        </div>
        <div>
          <img
            alt="Sass"
            className="icons-skils"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
          />
          <h5>Sass</h5>
        </div>
        <div>
          <img
            alt="Bootstrap"
            className="icons-skils"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
          />
          <h5>Bootstrap</h5>
        </div>
        <div>
          <img
            alt="Tailwindcss"
            className="icons-skils"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
          />
          <h5>Tailwindcss</h5>
        </div>
        {/* <div>
          <img
            alt="jQuery"
            className="icons-skils"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-plain-wordmark.svg"
          />
          <h5>jQuery</h5>
        </div> */}
        <div>
          <img
            alt="React"
            className="icons-skils"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
          />
          <h5>React</h5>
        </div>
        <div>
          <img
            alt="Typescript"
            className="icons-skils"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
          />
          <h5>Typescript</h5>
        </div>
      </div>
      <h2>Back-End</h2>
      <div className="skill">
        <div>
          <img
            alt="Nodejs"
            className="icons-skils"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
          />
          <h5>NodeJs</h5>
        </div>
        <div>
          <img
            alt="express"
            className="icons-skils"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
          />
          <h5>Express</h5>
        </div>
        <div>
          <img
            alt="mongodb"
            className="icons-skils"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg"
          />
          <h5>MongodDB</h5>
        </div>
      </div>
      <h2>
        <FormattedMessage id="tools" defaultMessage="Tools" />
      </h2>
      <div className="skill">
        {/* <div>
          <img
            alt="figma"
            className="icons-skils"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
            title="figma"
          />
          <h5>Figma</h5>
        </div> */}
        <div>
          <img
            alt="photoshop"
            className="icons-skils"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg"
            title="Photoshop"
          />
          <h5>Photoshop</h5>
        </div>
        <div>
          <img
            alt="Visual Studio Code"
            className="icons-skils"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Visual_Studio_Code_1.18_icon.svg/1200px-Visual_Studio_Code_1.18_icon.svg.png"
            title="Visual Studio Code"
          />
          <h5>VS Code</h5>
        </div>
        <div>
          <img
            alt="git"
            className="icons-skils"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
            title="git"
          />
          <h5>Git</h5>
        </div>
      </div>
    </div>
  );
}

export default SkillSection;
