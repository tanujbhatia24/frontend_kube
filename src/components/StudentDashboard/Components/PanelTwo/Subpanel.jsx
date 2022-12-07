import React from "react";
import {
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Link,
  Text,
  Checkbox,
} from "@chakra-ui/react";

const Subpanel = ({ topic }) => {
  const { Topic, link, pdf, isdone } = topic;
  const [checkedItems, setCheckedItems] = React.useState([false, false]);

  const allChecked = checkedItems.every(Boolean);
  const isIndeterminate = checkedItems.some(Boolean) && !allChecked;
  return (
    <div>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              <Box display="flex" justifyContent="space-between">
                <Text>{Topic}</Text>
                <Box display="flex" justifyContent="center" alignItems="center">
                  <Checkbox
                    isChecked={allChecked}
                    isIndeterminate={isIndeterminate}
                    onChange={(e) =>
                      setCheckedItems([e.target.checked, e.target.checked])
                    }
                    colorScheme="red"
                    size="sm"
                  />
                </Box>
              </Box>
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Box display="flex" justifyContent="space-between">
            <Text cursor="context-menu">
              Joining Link : <Link href={link}>{link}</Link>
            </Text>
            <Checkbox
              isChecked={checkedItems[0]}
              onChange={(e) =>
                setCheckedItems([e.target.checked, checkedItems[1]])
              }
              colorScheme="green"
              size="sm"
            />
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Text cursor="context-menu">
              PDF Link : <Link href={pdf}>{pdf}</Link>
            </Text>
            <Checkbox
              isChecked={checkedItems[1]}
              onChange={(e) =>
                setCheckedItems([checkedItems[0], e.target.checked])
              }
              colorScheme="green"
              size="sm"
            />
          </Box>
        </AccordionPanel>
      </AccordionItem>
    </div>
  );
};

export default Subpanel;
