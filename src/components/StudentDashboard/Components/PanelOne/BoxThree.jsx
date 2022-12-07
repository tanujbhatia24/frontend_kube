import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Box,
  Heading,
  Stack,
  CircularProgress,
  CircularProgressLabel,
  SimpleGrid,
} from "@chakra-ui/react";

function BoxThree() {
  return (
    <div>
      <Card h="100%">
        <CardHeader>
          <Heading size="md">Assignment Report</Heading>
        </CardHeader>

        <CardBody display="flex">
          <Stack margin="auto">
            <SimpleGrid columns={3} spacing={10}>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                alignItems="center"
              >
                <Heading size="xs" textTransform="uppercase" marginBottom="5px">
                  Coading
                </Heading>
                <CircularProgress value={40} color="green.400" thickness="12px">
                  <CircularProgressLabel>40%</CircularProgressLabel>
                </CircularProgress>
              </Box>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                alignItems="center"
              >
                <Heading size="xs" textTransform="uppercase" marginBottom="5px">
                  DSA
                </Heading>
                <CircularProgress value={40} color="green.400" thickness="12px">
                  <CircularProgressLabel>40%</CircularProgressLabel>
                </CircularProgress>
              </Box>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                alignItems="center"
              >
                <Heading size="xs" textTransform="uppercase" marginBottom="5px">
                  Personality Building
                </Heading>
                <CircularProgress value={40} color="green.400" thickness="12px">
                  <CircularProgressLabel>40%</CircularProgressLabel>
                </CircularProgress>
              </Box>
            </SimpleGrid>
          </Stack>
        </CardBody>
      </Card>
    </div>
  );
}

export default BoxThree;
