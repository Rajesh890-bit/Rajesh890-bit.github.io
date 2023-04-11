import React from "react";
import "../../pages/About/AboutPage.css";

import resume from "../../cv/Rajesh_Pradhan_Resume.pdf";

import image from "../../Asset/Untitled design.png";
/* Multi idioma */
import { FormattedMessage } from "react-intl";
import SkillSection from "../AbouticonSection";
import { GithubStats } from "../GithubStats";
import { Box, HStack, Heading, Image, SimpleGrid } from "@chakra-ui/react";
const About = () => {
  return (
    <section className="sobre-mi" id="sobre-mi">
      <h2 className="heading">
        <FormattedMessage id="about" defaultMessage="About me" />
      </h2>
      <SimpleGrid
        className="aboutmeCard"
        minChildWidth="45%"
        spacing="100px"
        bg="blue.900"
        backdropFilter={"blur(60px)"}
        borderRadius={"15px"}
        justify={"space-between"}
        p={"5rem"}
      >
        <Image
          className="home-img"
          w={{
            base: "85%",
            "401px": "75%",
            "457px": "60%",
            "697px": "50%",
            "798px": "40%",
            "934px": "30%",
          }}
          margin={"auto"}
          h={"30rem"}
          src={image}
          borderRadius={"19px"}
        ></Image>

        <HStack>
          <Box textAlign={"left"}>
            <Heading
              fontSize="50px"
              id="user-detail-name"
              color="rgb(0, 255, 162)"
              fontFamily={"monospace"}
              letterSpacing={"4px"}
              as="h1"
            >
              Rajesh Pradhan
            </Heading>
            <Box
              className="columns aboutmeCard"
              data-aos="fade-right"
              data-aos-delay="300"
              style={{
                margin: "auto",
                fontSize: "1.8rem",
                color: "rgb(0, 255, 162)",
              }}
            >
              <ul>
                <li>
                  <p>
                    <span>Age:</span>
                    23
                  </p>
                </li>
                <li>
                  <p>
                    <span>Hobbies: </span>
                    Chess and Programming
                  </p>
                </li>
                <li>
                  <p>
                    <span>Email:</span> pradhan143rajesh@gmail.com
                  </p>
                </li>
                <li>
                  <p>
                    <span>From:</span>
                    Cuttack,Odisha
                  </p>
                </li>
              </ul>
            </Box>
            <div className="mas-info">
              <a
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                download=""
                className="btn-codigo buttonDownload"
              >
                <FormattedMessage id="btn-cv" defaultMessage="Download CV" />
              </a>
            </div>
          </Box>
        </HStack>
      </SimpleGrid>
      <div>
        <SkillSection />
        <GithubStats />
      </div>
    </section>
  );
};

export default React.memo(About);
