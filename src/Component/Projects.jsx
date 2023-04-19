import React from "react";

import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  GridItem,
  Image,
  HStack,
  Badge,
  Link,
} from "@chakra-ui/react";

import style from "./Project.module.css";

import todolist1 from "../Asset/fastDeal.png";
import todolist2 from "../Asset/Naukri.png";
import todolist3 from "../Asset/tataCliq.png";
import todolist4 from "../Asset/shopsyfy.png";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const Responsive_Projects = [
  // {
  //   pc_screenshot: todolist4,
  //   mobile_screenshot: "pharmony+ Mobile.png",
  //   title: "Pharmony ➕",
  //   clone: "clone : 1mg",
  //   description:
  //     "It is an Indian healthcare and wellness platform that offers a range of online healthcare services to consumers.",
  //   tech_stack: [
  //     { skill: "HTML.png", w: "20px" },
  //     { skill: "CSS.png", w: "25px" },
  //     { skill: "Chakra ui.png", w: "25px" },
  //     { skill: "React.png", w: "25px" },
  //     { skill: "react-router.png", w: "25px" },
  //   ],
  //   netlify: "https://lustrous-fox-1c72ee.netlify.app/",
  //   github: "https://github.com/TejasPedge/hurried-desire-339",
  // },
];

const non_Responsive_Projects = [
  {
    pc_screenshot: todolist1,

    mobile_screenshot: null,

    title: "Fast Deal👗👖",

    clone: "clone : SnapDeal",

    description:
      "It is a global luxury fashion online marketplace that connects customers with a curated selection of products from a network of independent luxury boutiques and designer brands.",

    tech_stack: [
      { skill: "HTML.png", w: "20px" },
      { skill: "CSS.png", w: "25px" },
      { skill: "Chakra ui.png", w: "25px" },
      { skill: "React.png", w: "25px" },
      { skill: "react-router.png", w: "25px" },
      { skill: "Redux.png", w: "25px" },
    ],

    netlify: "https://fastdeal1.vercel.app/",

    github:
      "https://github.com/KoushikNiyogi/hard-mist-4433/tree/fw21_0929_day-5",

    isOnGithub: true,
  },

  {
    pc_screenshot: todolist3,

    mobile_screenshot: null,

    title: "Tata Cliq",

    clone: "clone : Tata Cliq",

    description:
      "It is an e-commerce side which provide fashion , gadgets and Home related products online and free delivery available",

    tech_stack: [
      { skill: "HTML.png", w: "20px" },
      { skill: "CSS.png", w: "25px" },
      { skill: "Javascript.png", w: "25px" },
    ],

    netlify: "https://lustrous-crumble-957505.netlify.app/",

    github: "https://github.com/Rajesh890-bit/fancy-thunder-426",

    isOnGithub: true,
  },

  {
    pc_screenshot: todolist2,

    mobile_screenshot: null,

    title: "Naukri📃📃",

    clone: "clone :Nakukri.com",

    description:
      "Naukri.com is a job portal that connects job seekers with employers and provides a platform for recruitment activities.",

    tech_stack: [
      { skill: "HTML.png", w: "20px" },
      { skill: "CSS.png", w: "25px" },
      { skill: "Javascript.png", w: "25px" },
    ],

    netlify: "https://cerulean-tarsier-3cdce4.netlify.app/",

    github:
      "https://github.com/SakthivelMadhu/-lazy-base-8555/tree/fw21_0929_day-5",

    isOnGithub: true,
  },

  {
    pc_screenshot: todolist4,

    mobile_screenshot: null,

    title: "Shopsyfy 🎫",

    clone: "clone : jio Mart",

    description:
      "It is an online platform that allows consumer to  buy grocery items online by free home delivery",

    tech_stack: [
      { skill: "HTML.png", w: "20px" },
      { skill: "CSS.png", w: "25px" },
      { skill: "Javascript.png", w: "25px" },
    ],

    netlify: "https://superlative-jelly-6ae2bd.netlify.app/html/",

    github: "https://github.com/Rajesh890-bit/internal-stone-3047",

    isOnGithub: true,
  },

  // {
  //   pc_screenshot: "Employee Records.png",

  //   mobile_screenshot: null,

  //   title: "Employee Records 👨⏺️👨",

  //   clone: "clone : ----",

  //   description:
  //     "It is an is an online platform that enables employers to manage their employees records in a centralized location. This portal allows employers to store and access important employee information such as personal details, job information, salary history, attendance records, performance evaluations, and other related data.",

  //   tech_stack: [
  //     { skill: "HTML.png", w: "20px" },
  //     { skill: "CSS.png", w: "25px" },
  //     { skill: "Javascript.png", w: "25px" },
  //   ],

  //   netlify: "https://deft-froyo-00423f.netlify.app/",

  //   github: "",

  //   isOnGithub: false,
  // },
];

const Projects = () => {
  return (
    <Box border={""} pb="100px" id="projects">
      {/* green border to below box */}

      <Box mt="110px">
        <Heading color="rgb(0, 255, 162);" fontSize={35}>
          {" "}
          <Text as="span" color="white">
            My
          </Text>{" "}
          Projects
        </Heading>

        <SimpleGrid spacing="8" mt="20px" columns={1}>
          {Responsive_Projects.map((el) => {
            return (
              <GridItem
                key={Math.random()}
                className="project-card"
                bg="blue.700"
                px="10px"
                py="25px"
                borderRadius={"18px"}
              >
                {/* visible on tablet,mobile screen description box */}

                <Box
                  flexDirection="column"
                  display={{ base: "flex", "1349px": "none" }}
                >
                  <HStack justify="center">
                    <Heading className="project-title" fontSize={"23px"}>
                      {el.title}
                    </Heading>

                    <Badge fontSize={10} colorScheme={"green"}>
                      {el.clone}
                    </Badge>
                  </HStack>

                  <Box
                    m="auto"
                    display="flex"
                    flexDirection="column"
                    w="90%"
                    bg="blue.800"
                    borderRadius={"10px"}
                    mt="20px"
                    p="2"
                  >
                    <Text color="aqua" align="left">
                      Description :{" "}
                    </Text>

                    <Text
                      className="project-description"
                      align="left"
                      color={"white"}
                    >
                      {el.description}
                    </Text>

                    <Text mt="5px" color="aqua" align="left">
                      Tech Stack :{" "}
                    </Text>

                    <HStack mt="10px" className="project-tech-stack">
                      {el.tech_stack.map((el) => {
                        return (
                          <Box key={Math.random(el)}>
                            <Image w={el.w} src={el.skill}></Image>
                          </Box>
                        );
                      })}
                    </HStack>

                    <Text mt="10px" color="aqua" align="left">
                      Deployed Link :{" "}
                    </Text>

                    <HStack mt="10px">
                      <Link isExternal href={el.netlify}>
                        <Image
                          _hover={{ cursor: "pointer" }}
                          border="2px solid"
                          borderRadius={"10px"}
                          bg="white"
                          w="50px"
                          src="Netlify logo.png"
                        ></Image>
                      </Link>

                      <ExternalLinkIcon zIndex="2" />

                      <Link isExternal href={el.github}>
                        <Image
                          bg="white"
                          _hover={{ cursor: "pointer" }}
                          borderRadius={"10px"}
                          w="30px"
                          src="github.png"
                        ></Image>
                      </Link>

                      <ExternalLinkIcon zIndex="2" />
                    </HStack>
                  </Box>
                </Box>

                {/* laptop andd iphone images */}

                <HStack
                  mt={{ base: "20px", "1349px": "0px" }}
                  flexDirection={{ base: "column", "848px": "row" }}
                  justify={{ base: "center", "1349px": "" }}
                  position={"relative"}
                >
                  <Image
                    zIndex={"2"}
                    w={{ base: "95%", "848px": "42.4%" }}
                    src="Laptop2.png"
                  ></Image>

                  <Image
                    id={style["Project-scr"]}
                    top={{ base: "5.6%", "848px": "22%", "1349px": "16.4%" }}
                    left={{
                      base: "12%",
                      "371px": "13%",
                      "496px": "14%",
                      "848px": "23.2%",
                      "1011px": "23.5%",
                      "1349px": "5.1%",
                    }}
                    w={{ base: "70%", "848px": "30.9%" }}
                    position={"absolute"}
                    src={el.pc_screenshot}
                  ></Image>

                  <HStack
                    display={{ base: "none", "1349px": "flex" }}
                    left="15%"
                    bottom="21%"
                    position={"absolute"}
                  >
                    <Link zIndex="2" isExternal href={el.netlify}>
                      <Image
                        _hover={{ cursor: "pointer" }}
                        border="2px solid"
                        borderRadius={"10px"}
                        bg="white"
                        w="50px"
                        src="Netlify logo.png"
                        boxShadow="2px 2px 10px black"
                      ></Image>
                    </Link>

                    <ExternalLinkIcon />

                    <Link zIndex="2" isExternal href={el.github}>
                      <Image
                        bg="white"
                        _hover={{ cursor: "pointer" }}
                        borderRadius={"10px"}
                        w="30px"
                        src="github.png"
                        boxShadow="2px 2px 10px black"
                      ></Image>
                    </Link>

                    <ExternalLinkIcon />
                  </HStack>

                  <Box
                    display={{ base: "block", "848px": "none" }}
                    h="30px"
                    mb="20px"
                  ></Box>

                  <Image
                    zIndex={"2"}
                    w={{ base: "70%", "848px": "20%" }}
                    src="Iphone.png"
                  ></Image>

                  <Image
                    top={{
                      base: "40.5%",
                      "296px": "40.3%",
                      "358px": "40%",
                      "363px": "39.6%",
                      "468px": "39%",
                      "555px": "38.5%",
                      "631px": "38%",
                      "848px": "2.5%",
                    }}
                    left={{
                      base: "26%",
                      "468px": "27%",
                      "848px": "64.5%",
                      "1349px": "46.1%",
                    }}
                    w={{ base: "45%", "848px": "12.8%" }}
                    position={"absolute"}
                    src={el.mobile_screenshot}
                  ></Image>

                  {/* -------------DEscription box---------------------- */}

                  <Box display={{ base: "none", "1349px": "block" }}>
                    <HStack>
                      <Heading className="project-title" fontSize={"23px"}>
                        {el.title}
                      </Heading>

                      <Badge fontSize={10} colorScheme={"green"}>
                        {el.clone}
                      </Badge>
                    </HStack>

                    <Box bg="blue.800" borderRadius={"10px"} mt="20px" p="2">
                      <Text color="aqua" align="left">
                        Description :{" "}
                      </Text>

                      <Text className="project-description" align="left">
                        {el.description}
                      </Text>

                      <Text mt="5px" color="aqua" align="left">
                        Tech Stack :{" "}
                      </Text>

                      <HStack mt="10px" className="project-tech-stack">
                        {el.tech_stack.map((el) => (
                          <Image
                            key={Math.random()}
                            w={el.w}
                            src={el.skill}
                          ></Image>
                        ))}
                      </HStack>

                      <Text mt="10px" color="aqua" align="left">
                        Deployed Link :{" "}
                      </Text>

                      <HStack mt="10px">
                        <Link
                          className="project-deployed-link"
                          isExternal
                          href={el.netlify}
                        >
                          <Image
                            _hover={{ cursor: "pointer" }}
                            border="2px solid"
                            borderRadius={"10px"}
                            bg="white"
                            w="50px"
                            src="Netlify logo.png"
                          ></Image>
                        </Link>

                        <ExternalLinkIcon zIndex="2" />

                        <Link
                          className="project-github-link"
                          isExternal
                          href={el.github}
                        >
                          <Image
                            borderRadius="40px"
                            bg="white"
                            _hover={{ cursor: "pointer" }}
                            w="30px"
                            src="github.png"
                          ></Image>
                        </Link>

                        <ExternalLinkIcon zIndex="2" />
                      </HStack>
                    </Box>
                  </Box>
                </HStack>
              </GridItem>
            );
          })}

          {/* for non responsive Projects */}

          {non_Responsive_Projects.map((el) => {
            return (
              <GridItem
                key={Math.random()}
                className="project-card"
                bg="blue.700"
                px="10px"
                py="25px"
                borderRadius={"18px"}
              >
                {/* visible on tablet,mobile screen description box */}

                <Box
                  flexDirection="column"
                  display={{ base: "flex", "1349px": "none" }}
                >
                  <HStack justify="center">
                    <Heading className="project-title" fontSize={"23px"}>
                      {el.title}
                    </Heading>

                    <Badge fontSize={10} colorScheme={"green"}>
                      {el.clone}
                    </Badge>
                  </HStack>

                  <Box
                    m="auto"
                    display="flex"
                    flexDirection="column"
                    w="80%"
                    bg="blue.800"
                    borderRadius={"18px"}
                    mt="20px"
                    p="2"
                  >
                    <Text color="aqua" align="left">
                      Description :{" "}
                    </Text>

                    <Text className="project-description" align="left">
                      {el.description}
                    </Text>

                    <Text mt="5px" color="aqua" align="left">
                      Tech Stack :{" "}
                    </Text>

                    <HStack mt="10px" className="project-tech-stack">
                      {el.tech_stack.map((el) => {
                        return (
                          <Box key={Math.random(el)}>
                            <Image w={el.w} src={el.skill}></Image>
                          </Box>
                        );
                      })}
                    </HStack>

                    <Text mt="10px" color="aqua" align="left">
                      Deployed Link :{" "}
                    </Text>

                    <HStack mt="10px">
                      <Link isExternal href={el.netlify}>
                        <Image
                          _hover={{ cursor: "pointer" }}
                          border="2px solid"
                          borderRadius={"10px"}
                          bg="white"
                          w="50px"
                          src="Netlify logo.png"
                        ></Image>
                      </Link>

                      <ExternalLinkIcon zIndex="2" />

                      <Link isExternal href={el.github}>
                        <Image
                          visibility={el.isOnGithub ? "visible" : "hidden"}
                          borderRadius="40px"
                          bg="white"
                          _hover={{ cursor: "pointer" }}
                          w="30px"
                          src="github.png"
                        ></Image>
                      </Link>

                      <ExternalLinkIcon
                        visibility={el.isOnGithub ? "visible" : "hidden"}
                        zIndex="2"
                      />
                    </HStack>
                  </Box>
                </Box>

                {/* laptop andd iphone images */}

                <HStack
                  mt={{ base: "20px", "1349px": "0px" }}
                  flexDirection={{ base: "column", "848px": "row" }}
                  justify={{ base: "center", "1349px": "" }}
                  position={"relative"}
                >
                  <Image
                    zIndex={"2"}
                    w={{ base: "95%", "848px": "42.4%" }}
                    src="Laptop2.png"
                  ></Image>

                  <Image
                    id={style["Project-scr"]}
                    top={{ base: "16%", "848px": "17.5%", "1349px": "16.4%" }}
                    left={{
                      base: "12%",
                      "371px": "13%",
                      "496px": "14%",
                      "848px": "33.6%",
                      "1011px": "33.8%",
                      "1349px": "5.1%",
                    }}
                    w={{ base: "70%", "848px": "30.9%" }}
                    position={"absolute"}
                    src={el.pc_screenshot}
                  ></Image>

                  <HStack
                    display={{ base: "none", "1349px": "flex" }}
                    left="15%"
                    bottom="21%"
                    position={"absolute"}
                  >
                    <Link zIndex="2" isExternal href={el.netlify}>
                      <Image
                        _hover={{ cursor: "pointer" }}
                        border="2px solid"
                        borderRadius={"10px"}
                        bg="white"
                        w="50px"
                        src="Netlify logo.png"
                        boxShadow="2px 2px 10px black"
                      ></Image>
                    </Link>

                    <ExternalLinkIcon />

                    <Link zIndex="2" isExternal href={el.github}>
                      <Image
                        visibility={el.isOnGithub ? "visible" : "hidden"}
                        bg="white"
                        _hover={{ cursor: "pointer" }}
                        borderRadius={"10px"}
                        w="30px"
                        src="github.png"
                        boxShadow="2px 2px 10px black"
                      ></Image>
                    </Link>

                    <ExternalLinkIcon
                      visibility={el.isOnGithub ? "visible" : "hidden"}
                    />
                  </HStack>

                  <Box
                    display={{ base: "block", "848px": "none" }}
                    h="30px"
                    mb="20px"
                  ></Box>

                  {/* <Image visibility = {el.isResponsive ? 'visible' : 'hidden'} zIndex={'2'} w = {{base : '70%','848px' : '20%'}} src = 'Iphone.png'></Image>

                            <Image visibility = {el.isResponsive ? 'visible' : 'hidden'} top={{base : '40.5%','296px' : '40.3%','358px' : '40%','363px' : '39.6%','468px' : '39%','555px' :'38.5%','631px' : '38%','848px' : '2.5%'}} left = {{base : '26%','468px' :'27%','848px'  :'64.5%','1349px' : '46.1%'}} w ={{ base : '45%','848px' : '12.8%'}} position={'absolute'} src = {el.mobile_screenshot}></Image>
                       
                     */}
                  {/* -------------DEscription box---------------------- */}

                  <Box display={{ base: "none", "1349px": "block" }}>
                    <HStack>
                      <Heading className="project-title" fontSize={"23px"}>
                        {el.title}
                      </Heading>

                      <Badge fontSize={10} colorScheme={"green"}>
                        {el.clone}
                      </Badge>
                    </HStack>

                    <Box bg="blue.800" borderRadius={"10px"} mt="20px" p="2">
                      <Text color="aqua" align="left">
                        Description :{" "}
                      </Text>

                      <Text className="project-description" align="left">
                        {el.description}
                      </Text>

                      <Text mt="5px" color="aqua" align="left">
                        Tech Stack :{" "}
                      </Text>

                      <HStack mt="10px" className="project-tech-stack">
                        {el.tech_stack.map((el) => (
                          <Image
                            key={Math.random()}
                            w={el.w}
                            src={el.skill}
                          ></Image>
                        ))}
                      </HStack>

                      <Text mt="10px" color="aqua" align="left">
                        Deployed Link :{" "}
                      </Text>

                      <HStack mt="10px">
                        <Link
                          className="project-deployed-link"
                          isExternal
                          href={el.netlify}
                        >
                          <Image
                            _hover={{ cursor: "pointer" }}
                            border="2px solid"
                            borderRadius={"10px"}
                            bg="white"
                            w="50px"
                            src="Netlify logo.png"
                          ></Image>
                        </Link>

                        <ExternalLinkIcon zIndex="2" />

                        <Link
                          className="project-github-link"
                          isExternal
                          href={el.github}
                        >
                          <Image
                            visibility={el.isOnGithub ? "visible" : "hidden"}
                            borderRadius="40px"
                            bg="white"
                            _hover={{ cursor: "pointer" }}
                            w="30px"
                            src="github.png"
                          ></Image>
                        </Link>

                        <ExternalLinkIcon
                          visibility={el.isOnGithub ? "visible" : "hidden"}
                          zIndex="2"
                        />
                      </HStack>
                    </Box>
                  </Box>
                </HStack>
              </GridItem>
            );
          })}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Projects;
