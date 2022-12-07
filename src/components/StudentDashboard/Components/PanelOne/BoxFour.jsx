import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Box,
  Heading,
  Stack,
  SimpleGrid,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

function BoxFour() {
  const stars = [];
  for (let i = 0; i <= 5; i++) {
    stars.push(<StarIcon />);
  }
  return (
    <div>
      <Card h="100%">
        <CardHeader display="flex" justifyContent="space-between">
          <Heading size="md">Evalution Score</Heading>
          <Heading size="md">Sprint-1</Heading>
        </CardHeader>

        <CardBody display="flex">
          <Stack margin="auto">
            <SimpleGrid columns={3} spacing={10}>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="space-evenly"
                alignItems="center"
              >
                <Heading size="xs" textTransform="uppercase" marginBottom="5px">
                  Coading
                </Heading>
                <Box>
                  {stars.map((star) => {
                    return star;
                  })}
                </Box>
              </Box>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="space-evenly"
                alignItems="center"
              >
                <Heading size="xs" textTransform="uppercase" marginBottom="5px">
                  DSA
                </Heading>
                <Box>
                  {stars.map((star) => {
                    return star;
                  })}
                </Box>
              </Box>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="space-evenly"
                alignItems="center"
              >
                <Heading size="xs" textTransform="uppercase" marginBottom="5px">
                  Personality Building
                </Heading>
                <Box>
                  {stars.map((star) => {
                    return star;
                  })}
                </Box>
              </Box>
            </SimpleGrid>
          </Stack>
        </CardBody>
      </Card>
    </div>
  );
}

export default BoxFour;
