import React from "react";
import {
  Box,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Checkbox,
  Text,
  OrderedList,
  ListItem,
  Input,
  FormControl,
  FormLabel,
  Button,
} from "@chakra-ui/react";

const Subpanel2 = ({ topic }) => {
  const { Topic, assignment } = topic;

  return (
    <div>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              <Box display="flex" justifyContent="space-between">
                <Text>{Topic}</Text>
                <Box display="flex" justifyContent="center" alignItems="center">
                  <Checkbox colorScheme="red" size="sm" />
                </Box>
              </Box>
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <OrderedList>
            {assignment.map((el) => (
              <ListItem>{el}</ListItem>
            ))}
          </OrderedList>
          <FormControl>
            <FormLabel>Submission Link</FormLabel>
            <Input focusBorderColor="red.300" />
            <Button mt={4} colorScheme="teal" type="submit">
              Submit
            </Button>
          </FormControl>
        </AccordionPanel>
      </AccordionItem>
    </div>
  );
};

export default Subpanel2;
