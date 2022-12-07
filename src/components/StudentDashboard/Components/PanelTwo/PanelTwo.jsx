import React from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Text,
} from "@chakra-ui/react";
import Panel from "./Panel";

const PanelTwo = ({ topics }) => {
  const topicArr = [];

  const { coading, DSA, personality } = topics;

  for (let i in topics) {
    topicArr.push(i);
  }

  return (
    <div>
      <Tabs variant="soft-rounded" colorScheme="green">
        <TabList>
          {topicArr.map((topic) => {
            return (
              <Tab cursor="pointer">
                <Text as="b" textTransform="uppercase">
                  {topic}
                </Text>
              </Tab>
            );
          })}
        </TabList>
        <TabPanels>
          <TabPanel>
            <Panel topic={coading} />
          </TabPanel>
          <TabPanel>
            <Panel topic={DSA} />
          </TabPanel>
          <TabPanel>
            <Panel topic={personality} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default PanelTwo;
