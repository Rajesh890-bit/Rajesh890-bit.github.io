import {
  Box,
  Container,
  Flex,
  Image,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

const Logo = (props) => {
  return (
    <Flex alignItems={"center"}>
      <Image w="3.5rem" src="logor.png"></Image>
      <Text>Thank you for Visiting</Text>
    </Flex>
  );
};

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("rgb(1, 16, 27)")}
      color={useColorModeValue("white")}
      mt={{
        base: "86px",
        "456px": "94px",
        "612px": "95px",
        "735px": "105px",
        "934px": "150px",
      }}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        spacing={4}
        justify={"center"}
        align={"center"}
      >
        <Logo />
        <Stack direction={"row"} spacing={6}>
          <Link href={"#home"}>Home</Link>
          <Link href={"#about"}>About</Link>
          <Link href={"#skills"}>Skills</Link>
          <Link href={"#projects"}>Project</Link>
        </Stack>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <Text>© 2023. All rights reserved to Rajesh Pradhan</Text>
        </Container>
      </Box>
    </Box>
  );
}
