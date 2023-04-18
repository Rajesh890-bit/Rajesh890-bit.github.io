import React from "react";

import { Box, Text, Heading } from "@chakra-ui/react";

import style from "./Aboutme.module.css";

const About = () => {
  return (
    <Box border="" h="100vh" id="about" className="about section" mb="40px">
      <Heading mt="150px" color="rgb(0, 255, 162);" fontSize={35}>
        <Text as="span" color="white">
          About
        </Text>{" "}
        Me
      </Heading>

      <Text mt="50px" fontSize={"20"}>
        Hello 👋 Myself Rajesh
      </Text>

      <Box
        className={style.aboutme}
        color="black"
        p={{ base: "8", "486px": "10" }}
        borderRadius={"10px"}
        bg="green.300"
        w={{ base: "100%", "410px": "300px", "486px": "400px" }}
        m="auto"
        mt="20px"
      >
        <Text mt="15px" fontSize="16px" id="user-detail-intro">
          A passionate Full Stack MERN Developer skilled in HTML, CSS,
          Javascript and React, with a focus on designing and building
          high-performance and scalable enterprise applications
        </Text>
      </Box>
    </Box>
  );
};

export default About;
