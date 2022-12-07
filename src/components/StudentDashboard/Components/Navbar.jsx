import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Image,
  Avatar,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  // PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  Button,
  Portal,
} from "@chakra-ui/react";
import { ChatIcon } from "@chakra-ui/icons";
import { Sidebar } from "./Sidebar";

export const Navbar = () => {
  return (
    <Box
      bgGradient={[
        "linear(to-tr, teal.300, yellow.400)",
        "linear(to-t, blue.200, teal.500)",
        "linear(to-b, orange.100, purple.300)",
      ]}
    >
      <Box display="flex" justifyContent="space-between" w="95%" margin="auto">
        <Box
          w={{ base: "10%", sm: "5%" }}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Link to="/">
            <Image
              src="https://i.pinimg.com/originals/05/29/cf/0529cf7c86297aa258c57ce5975459ed.jpg"
              alt="Logo"
              borderRadius="50%"
            />
          </Link>
        </Box>

        <Box
          display={{ base: "none", md: "none", lg: "flex" }}
          justifyContent="space-between"
          w="50%"
        >
          <Box
            w="10%"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <ChatIcon w="100%" h="30%" cursor="pointer" />
          </Box>
          <Box
            w="10%"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Link to="/discusion">Discusion</Link>
          </Box>
          <Box
            w="10%"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Link to="/ticket">Ticket</Link>
          </Box>
          <Box
            w="10%"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            {/* <Avatar
              name="Dan Abrahmov"
              src="https://bit.ly/dan-abramov"
              cursor="pointer"
            /> */}
            <Popover>
              <PopoverTrigger>
                <Avatar
                  name="Dan Abrahmov"
                  src="https://bit.ly/dan-abramov"
                  cursor="pointer"
                />
              </PopoverTrigger>
              <Portal>
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverHeader
                    textAlign="center"
                    fontSize="24px"
                    fontWeight="500"
                  >
                    Tinkle Dash
                  </PopoverHeader>
                  <PopoverCloseButton />
                  <PopoverBody>
                    <Button colorScheme="blue" float="right">
                      Logout
                    </Button>
                  </PopoverBody>
                  {/* <PopoverFooter>This is the footer</PopoverFooter> */}
                </PopoverContent>
              </Portal>
            </Popover>
          </Box>
        </Box>
        <Box display={{ base: "block", md: "block", lg: "none" }}>
          <Sidebar />
        </Box>
      </Box>
    </Box>
  );
};
