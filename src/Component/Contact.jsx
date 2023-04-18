import React from "react";

import { Box, Stack, Image, Link, Text, Heading } from "@chakra-ui/react";

const Contact = () => {
  return (
    <Box h="250px" id="contact">
      <Heading mt="50px" color="rgb(0, 255, 162);" fontSize={35} pb={"1rem"}>
        {" "}
        <Text as="span" color="white">
          Contact
        </Text>
      </Heading>
      <Stack
        align="center"
        borderRadius="10px"
        p="20px"
        py="30px"
        m="auto"
        backdropFilter="blur(10px)"
        backgroundColor="rgba(255, 255, 255, 0.3)"
        color="white"
        w="270px"
        justify={"space-between"}
      >
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
          <Text color="#FFEB3B" fontSize={"1.5rem"}>
            +91 7735596685
          </Text>
        </Link>
      </Stack>
    </Box>
  );
};

export default Contact;
