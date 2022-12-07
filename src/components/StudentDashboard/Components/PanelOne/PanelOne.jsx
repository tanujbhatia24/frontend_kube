import React from "react";
import { BoxOne } from "./BoxOne";
import BoxTwo from "./BoxTwo";
import { SimpleGrid } from "@chakra-ui/react";
import BoxThree from "./BoxThree";
import BoxFour from "./BoxFour";

export const PanelOne = () => {
  return (
    <SimpleGrid columns={[1, 1, 2]}>
      <BoxOne />
      <BoxTwo />
      <BoxThree />
      <BoxFour />
    </SimpleGrid>
  );
};
