import React from "react";

import { Box, Stack, Image, Link, Text, Heading } from "@chakra-ui/react";
import backgroundImage from "../Asset/Contectimag.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import TextAnimationOnHover from "./TextAnimationOnHover";
const Contact = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Box
      h="600px"
      id="contact"
      w="100%"
      pos="static"
      top="0"
      left="0"
      mt={"10rem"}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        justifyContent: "center",
        borderRadius: "18px",
      }}
    >
      <Stack
        data-aos="fade-up"
        data-aos-duration="1500"
        align="center"
        borderRadius="10px"
        p="20px"
        py="30px"
        m="auto"
        backdropFilter="blur(15px)"
        backgroundColor="rgba(255, 255, 255, 0.3)"
        color="black"
        fontWeight={"bold"}
        w="270px"
        justify={"space-between"}
      >
        <Heading mt="50px" color="rgb(6, 246, 50);" fontSize={35} pb={"1rem"}>
          {" "}
          <Text as="span" color="rgb(6, 246, 50)">
            <TextAnimationOnHover text="Contact" />
          </Text>
        </Heading>
        <Box display="flex">
          <Text>Linked In :</Text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link
            id="contact-linkedin"
            isExternal
            href="https://www.linkedin.com/in/rajesh-pradhan-027907219/"
          >
            {" "}
            <Image
              _hover={{
                cursor: "pointer",
                transform: "scale(1.1)",
                transition: "all 0.4s",
              }}
              w="30px"
              src="linkedin.png"
            ></Image>{" "}
          </Link>
        </Box>

        <Box display="flex">
          <Text>Github :</Text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link
            id="contact-github"
            isExternal
            href="https://github.com/Rajesh890-bit"
          >
            {" "}
            <Image
              _hover={{
                cursor: "pointer",
                transform: "scale(1.1)",
                transition: "all 0.4s",
              }}
              w="40px"
              src="github.png"
            ></Image>{" "}
          </Link>
        </Box>

        <Box display="flex">
          <Text>Email :</Text>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link
            id="contact-email"
            isExternal
            href="mailto:pradhan143rajesh@gmail.com"
          >
            {" "}
            <Image
              _hover={{
                cursor: "pointer",
                transform: "scale(1.1)",
                transition: "all 0.4s",
              }}
              w="35px"
              src="gmail.png"
            ></Image>{" "}
          </Link>
        </Box>

        <Box display="flex">
          <Text>Whatsapp :</Text>&nbsp;&nbsp;&nbsp;
          <Link isExternal href="https://wa.me/+917735596685">
            {" "}
            <Image
              _hover={{
                cursor: "pointer",
                transform: "scale(1.1)",
                transition: "all 0.4s",
              }}
              w="35px"
              src="whatsapp.png"
            ></Image>{" "}
          </Link>
        </Box>

        <Box display="flex">
          <Text>Phone No :</Text>&nbsp;&nbsp;&nbsp;
          <Link id="contact-phone" isExternal href="tel:7735596685">
            {" "}
            <Image
              _hover={{
                cursor: "pointer",
                transform: "scale(1.1)",
                transition: "all 0.4s",
              }}
              w="35px"
              src="Phone.png"
            ></Image>{" "}
          </Link>
        </Box>

        <Link id="contact-phone" isExternal href="tel:7735596685">
          {" "}
          <Text mt="20px" color="rgb(6, 246, 50);" fontSize={25}>
            7735596685
          </Text>
        </Link>
      </Stack>
    </Box>
  );
};

export default Contact;
