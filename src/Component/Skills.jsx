import React from "react";

import {
  Box,
  Heading,
  SimpleGrid,
  GridItem,
  Image,
  Text,
} from "@chakra-ui/react";

import style from "./skills.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Tech_Stack1 = [
  { img: "HTML.png", text: "HTML 5", w: "70px", w2: "40px" },

  { img: "CSS.png", text: "CSS 3", w: "80px", w2: "46px" },

  { img: "Javascript.png", text: "Javascript", w: "80px", w2: "46px" },

  { img: "Typescript.png", text: "Typescript", w: "111px", w2: "55px" },

  { img: "React.png", text: "React", w: "80px", w2: "40px" },

  { img: "react-router.png", text: "React Router", w: "121px", w2: "60px" },

  { img: "Redux.png", text: "Redux", w: "80px", w2: "40px" },

  { img: "Chakra ui.png", text: "Chakra UI", w: "80px", w2: "40px" },
];

const Tech_Stack2 = [
  { img: "Node js.png", text: "Node JS", w: "80px", w2: "40px" },

  { img: "Mongo db.png", text: "Mongo DB", w: "80px", w2: "40px" },
  { img: "express-js.jpg", text: "Express", w: "80px", w2: "40px" },
];

const Tech_Stack3 = [
  { img: "vercel.png", text: "Vercel", w: "80px", w2: "40px" },

  {
    img: "netlify-logo-png-transparent.png",
    text: "Netlify",
    w: "80px",
    w2: "40px",
  },
  { img: "github.png", text: "Github", w: "100px", w2: "60px" },
  { img: "postman.png", text: "Postman", w: "100px", w2: "60px" },
  { img: "npm.webp", text: "NPM", w: "80px", w2: "40px" },
  {
    img: "png-transparent-visual-studio-code-editor.png",
    text: "Visual Studio",
    w: "80px",
    w2: "40px",
  },
];

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 200 });
  }, []);

  return (
    <Box border="" id="skills">
      <Heading mt="90px" color="rgb(0, 255, 162);" fontSize={35}>
        <Text as="span" color="white">
          My
        </Text>{" "}
        Skills
      </Heading>

      <Heading mt="90px" color="rgb(0, 255, 162);" fontSize={35}>
        Frontend
      </Heading>
      <SimpleGrid
        columns={{ base: "2", "529px": "3", "848px": "4" }}
        spacing={"20px"}
        mt="50px"
      >
        {Tech_Stack1.map((el, i) => {
          return (
            <GridItem
              data-aos="zoom-in-up"
              data-aos-duration="1500"
              key={Math.random()}
              className="skills-card"
              border="1px solid rgb(6, 246, 50)"
              borderRadius={"10px"}
              bg="rgb(10, 29, 44)"
            >
              <Box p="15px" display={"flex"} justifyContent="center">
                <Image
                  id={style[`animate${i}`]}
                  _hover={{ cursor: "pointer" }}
                  w={{ base: el.w2, "685px": el.w }}
                  className="skills-card-img"
                  src={el.img}
                ></Image>
              </Box>

              <Text fontSize={"20"} mb="10px" className="skills-card-name">
                {el.text}
              </Text>
            </GridItem>
          );
        })}
      </SimpleGrid>
      {/* //______backend______________________________ */}

      <Heading mt="90px" color="rgb(0, 255, 162);" fontSize={35}>
        Backend
      </Heading>
      <SimpleGrid
        columns={{ base: "2", "529px": "3", "848px": "4" }}
        spacing={"20px"}
        mt="50px"
      >
        {Tech_Stack2.map((el, i) => {
          return (
            <GridItem
              key={Math.random()}
              data-aos="zoom-in-up"
              data-aos-duration="1500"
              className="skills-card"
              border="1px solid rgb(6, 246, 50)"
              borderRadius={"10px"}
              bg="rgb(10, 29, 44)"
            >
              <Box p="15px" display={"flex"} justifyContent="center">
                <Image
                  id={style[`animate${i}`]}
                  _hover={{ cursor: "pointer" }}
                  w={{ base: el.w2, "685px": el.w }}
                  className="skills-card-img"
                  src={el.img}
                ></Image>
              </Box>

              <Text fontSize={"20"} mb="10px" className="skills-card-name">
                {el.text}
              </Text>
            </GridItem>
          );
        })}
      </SimpleGrid>

      {/* Tools */}

      <Heading mt="90px" color="rgb(0, 255, 162);" fontSize={35}>
        Tools
      </Heading>

      <SimpleGrid
        columns={{ base: "2", "529px": "3", "848px": "4" }}
        spacing={"20px"}
        mt="50px"
      >
        {Tech_Stack3.map((el, i) => {
          return (
            <GridItem
              key={Math.random()}
              data-aos="zoom-in-up"
              data-aos-duration="1500"
              className="skills-card"
              border="1px solid rgb(6, 246, 50)"
              borderRadius={"10px"}
              bg="rgb(10, 29, 44)"
            >
              <Box p="15px" display={"flex"} justifyContent="center">
                <Image
                  id={style[`animate${i}`]}
                  _hover={{ cursor: "pointer" }}
                  w={{ base: el.w2, "685px": el.w }}
                  className="skills-card-img"
                  src={el.img}
                ></Image>
              </Box>

              <Text fontSize={"20"} mb="10px" className="skills-card-name">
                {el.text}
              </Text>
            </GridItem>
          );
        })}
      </SimpleGrid>
    </Box>
  );
};

export default Skills;
