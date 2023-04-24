import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Stack,
  Text,
  Image,
} from "@chakra-ui/react";

import { Link as ScrollLink } from "react-scroll";

const Navbar_options = [
  { text: "Home", id: "home" },
  { text: "About", id: "about" },
  { text: "Skills", id: "skills" },
  { text: "Projects", id: "projects" },
  { text: "Contact", id: "contact" },
];

export function NavDrawer({ isOpen, onOpen, onClose }) {
  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        display={{ base: "block", "836px": "none" }}
      >
        <DrawerOverlay display={{ base: "block", "836px": "none" }} />
        <DrawerContent
          display={{ base: "block", "836px": "none" }}
          bg="rgb(1, 16, 27)"
          color="white"
        >
          <DrawerCloseButton _hover={{ background: "rgb(7, 40, 66);" }} />
          <DrawerHeader>
            <Image
              borderRadius="10px"
              src="logor.png"
              width={"7rem"}
              style={{ margin: "auto" }}
            ></Image>
          </DrawerHeader>

          <DrawerBody>
            {/* <Input placeholder='Type here...' /> */}

            <Stack spacing="20px">
              {Navbar_options.map((el) => {
                return (
                  <ScrollLink
                    key={Math.random()}
                    to={el.id}
                    smooth={true}
                    duration={300}
                  >
                    <Text
                      _hover={{
                        cursor: "pointer",
                        color: "purple.300",
                        borderBottom: "2px solid",
                        borderColor: "purple.400",
                      }}
                      px="2"
                      py="1"
                      fontWeight={600}
                      onClick={() => onClose()}
                    >
                      {el.text}
                    </Text>
                  </ScrollLink>
                );
              })}
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
