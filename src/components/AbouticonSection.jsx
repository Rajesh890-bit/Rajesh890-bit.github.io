import { Text } from "@chakra-ui/react";
import "../pages/About/AboutPage.css";
import { FormattedMessage } from "react-intl";
// import { FaLinkedin, FaWhatsapp, FaGithub, FaGoogle } from "react-icons/fa";
function SkillSection() {
  return (
    <div
      id="skills"
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
        <div class="skills-card">
          <img
            alt="HTML"
            class="skills-card-img"
            className="skills-card-img"
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"
          />
          <h5 class="skills-card-name">HTML</h5>
        </div>
        <div class="skills-card">
          <img
            alt="CSS"
            className="skills-card-img"
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"
          />
          <h5 class="skills-card-name">CSS</h5>
        </div>
        <div class="skills-card">
          <img
            alt="Js"
            className="skills-card-img"
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg"
          />
          <h5 class="skills-card-name">JavaScript</h5>
        </div>
        <div class="skills-card">
          <img
            alt="Sass"
            className="skills-card-img"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
          />
          <h5 class="skills-card-name">Sass</h5>
        </div>
        <div class="skills-card">
          <img
            alt="Bootstrap"
            className="skills-card-img"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
          />
          <h5 class="skills-card-name">Bootstrap</h5>
        </div>
        <div class="skills-card">
          <img
            alt="Tailwindcss"
            className="skills-card-img"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
          />
          <h5 class="skills-card-name">Tailwindcss</h5>
        </div>
        <div class="skills-card">
          <img
            alt="React"
            className="skills-card-img"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
          />
          <h5 class="skills-card-name">React</h5>
        </div>
        <div class="skills-card">
          <img
            alt="Typescript"
            className="skills-card-img"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
          />
          <h5 class="skills-card-name">Typescript</h5>
        </div>
      </div>
      <h2>Back-End</h2>
      <div className="skill">
        <div class="skills-card">
          <img
            alt="Nodejs"
            className="skills-card-img"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
          />
          <h5 class="skills-card-name">NodeJs</h5>
        </div>
        <div class="skills-card">
          <img
            alt="express"
            className="skills-card-img"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
          />
          <h5 class="skills-card-name">Express</h5>
        </div>
        <div class="skills-card">
          <img
            alt="mongodb"
            className="skills-card-img"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg"
          />
          <h5 class="skills-card-name">MongodDB</h5>
        </div>
      </div>
      <h2>
        <FormattedMessage id="tools" defaultMessage="Tools" />
      </h2>
      <div className="skill">
        <div class="skills-card">
          <img
            alt="photoshop"
            className="skills-card-img"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg"
            title="Photoshop"
          />
          <h5 class="skills-card-name">Photoshop</h5>
        </div>
        <div class="skills-card">
          <img
            alt="Visual Studio Code"
            className="skills-card-img"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Visual_Studio_Code_1.18_icon.svg/1200px-Visual_Studio_Code_1.18_icon.svg.png"
            title="Visual Studio Code"
          />
          <h5 class="skills-card-name">VS Code</h5>
        </div>
        <div class="skills-card">
          <img
            alt="git"
            className="skills-card-img"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
            title="git"
          />
          <h5 class="skills-card-name">Git</h5>
        </div>
      </div>
    </div>
  );
}

export default SkillSection;
