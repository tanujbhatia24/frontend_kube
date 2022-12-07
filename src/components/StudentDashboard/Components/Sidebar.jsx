import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Box,
  Avatar,
  AvatarBadge,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Button
        ref={btnRef}
        colorScheme="none"
        onClick={onOpen}
        w={{ base: "10%", sm: "5%" }}
      >
        <HamburgerIcon color="rgba(0, 0, 0, 0.64)" />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Box>
              <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov">
                <AvatarBadge boxSize="1.25em" bg="green.500" />
              </Avatar>
              <Text>Tinkle Dash</Text>
            </Box>
          </DrawerHeader>

          <hr style={{ width: "85%", margin: "auto" }} />

          <DrawerBody display="flex" flexDirection="column" gap="2%">
            <Link to="/discusion">Discusion</Link>
            <Link to="/ticket">Ticket</Link>
          </DrawerBody>

          <DrawerFooter>
            <Button mr={3} onClick={onClose} colorScheme="blue">
              Logout
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
