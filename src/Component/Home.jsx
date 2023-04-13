import React from "react";

import {
  Box,
  HStack,
  Heading,
  Text,
  Image,
  Button,
  Link,
} from "@chakra-ui/react";

import style from "./Aboutme.module.css";

const Home = () => {
  const OpenPDF = () => {
    const url = `https://drive.google.com/file/d/1KVEDHYtMddALFwpVm_P1rS7PtZtlTT4B/view?usp=share_link`;

    window.open(url, "_blank");
  };

  return (
    <Box mt="-90px" border="2px solid rgb(1, 16, 27)" id="home" mb="30px">
      {/* //mt = {{base : '20px','456px' : '25px','612px' : '30px','735px' : '40px', '934px':'100px'}} */}

      <HStack
        mt={{
          base: "86px",
          "456px": "94px",
          "612px": "95px",
          "735px": "105px",
          "934px": "150px",
        }}
        flexDirection={{ base: "column", "934px": "row" }}
        pl="25px"
        bg="blue.900"
        backdropFilter={"blur(10px)"}
        justify={"space-between"}
      >
        <Box
          mb={{ base: "50px", "934px": "none" }}
          pt={{ base: "30px", "934px": "none" }}
          pr={{ base: "30px", "934px": "none" }}
          w={{ base: "98%", "934px": "50%" }}
          textAlign={"left"}
        >
          <Heading fontSize="50px" color="white" letterSpacing={"2px"} as="h1">
            Hi! I Am
          </Heading>

          <Heading
            fontSize="50px"
            id="user-detail-name"
            color="rgb(0, 255, 162)"
            fontFamily={"monospace"}
            letterSpacing={"2px"}
            as="h1"
          >
            Rajesh Pradhan
          </Heading>

          <Text mt="15px" fontSize="15px" id="user-detail-intro">
            A passionate Full Stack MERN Developer skilled in HTML, CSS,
            Javascript and React, with a focus on designing and building
            high-performance and scalable enterprise applications
          </Text>

          <Button
            onClick={OpenPDF}
            id="resume-button-2"
            mb="20px"
            _hover={{ background: "rgb(115, 249, 200)" }}
            mt="15px"
            className="nav-link resume"
            size={["sm", "md"]}
            variant="none"
            bg="rgb(0, 255, 162);"
            border="1px solid"
            boxShadow={"1px 1px 5px"}
            color="black"
          >
            <Link
              id="resume-link-2"
              _hover={{ textDecoration: "none" }}
              href="Rajesh_Pradhan_Resume.pdf"
              isExternal
              download="Rajesh_Pradhan_Resume.pdf"
            >
              Resume
            </Link>
          </Button>

          <HStack w="170px" justify={"space-between"}>
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

            <Link
              id="contact-phone"
              isExternal
              href="https://wa.me/+917735596685"
            >
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
          </HStack>
        </Box>

        <Image
          className={style.Emoji}
          display={{ base: "none", "934px": "block" }}
          w="200px"
          src=""
        ></Image>

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
          src="Rajeshimage.png"
        ></Image>
      </HStack>
    </Box>
  );
};

export default Home;
