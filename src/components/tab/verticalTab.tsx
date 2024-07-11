"use client";

import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import * as React from "react";
import PersonalInformation from "./verticalTabInfo/personalInformation";
import CareerInfo from "./verticalTabInfo/careerInfo";
import PrevDenomInfo from "./verticalTabInfo/prevDenomInfo";
import FamilyInfo from "./verticalTabInfo/familyInfo";

interface TabComponentProps {
  editMode: boolean;
}


interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Box>{children}</Box>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs({editMode}: TabComponentProps) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        height: 500,
      }}>
      <Tabs
        orientation="vertical"
        variant="standard"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider" }}>
        <Tab label="Personal Information" {...a11yProps(0)} />
        <Tab label="Family Information" {...a11yProps(1)} />
        <Tab label="Career Information" {...a11yProps(2)} />
        <Tab label="Previous Denomination" {...a11yProps(3)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <PersonalInformation editMode={editMode} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <FamilyInfo editMode={editMode} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <CareerInfo />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <PrevDenomInfo />
      </TabPanel>
    </Box>
  );
}
