import React from "react";
import { Accordion } from "@chakra-ui/react";
import Subpanel from "./Subpanel";
import Subpanel2 from "./Subpanel2";

const Panel = ({ topic }) => {
  // console.log(topic);
  return (
    <div>
      <Accordion defaultIndex={[0]} allowMultiple>
        {topic.map((item) =>
          item.assignment !== undefined ? (
            <Subpanel2 topic={item} />
          ) : (
            <Subpanel topic={item} />
          )
        )}
      </Accordion>
    </div>
  );
};

export default Panel;
