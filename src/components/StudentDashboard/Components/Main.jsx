import React from "react";
import { getAssignmentData, getCourseData, getTabData } from "./api";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { PanelOne } from "./PanelOne/PanelOne";
import PanelTwo from "./PanelTwo/PanelTwo";

export const Main = () => {
  const [data, SetData] = React.useState([]);
  const [courses, SetCourses] = React.useState({});
  const [assignment, setAssignment] = React.useState({});

  React.useEffect(() => {
    getTabData().then((res) => SetData(res.data));
    getCourseData().then((res) => SetCourses(res.data));
    getAssignmentData().then((res) => setAssignment(res.data));
  }, []);

  return (
    <div>
      <Tabs isManual variant="enclosed" display="flex" flexDirection="row">
        <TabList
          display="flex"
          flexDirection="column"
          gap="20px"
          marginTop="25px"
        >
          {data.map((tab, index) => (
            <Tab key={index}>{tab.label}</Tab>
          ))}
        </TabList>
        <TabPanels>
          <TabPanel>
            <PanelOne />
          </TabPanel>
          <TabPanel>
            <PanelTwo topics={courses} />
          </TabPanel>
          <TabPanel>
            <PanelTwo topics={assignment} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};
