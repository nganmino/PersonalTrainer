import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CustomerList from "./CustomerList_2";
import TrainingList from "./TrainingList";
import Schedule from "./Schedule";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 4 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 2, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          // aria-label="basic tabs example"
          indicatorColor="secondary"
          aria-label="secondary tabs example"
          centered
        >
          <Tab label="Customer" {...a11yProps(0)} wrapped />
          <Tab label="Training" {...a11yProps(1)} wrapped />
          <Tab label="Calendar" {...a11yProps(2)} wrapped />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <CustomerList />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <TrainingList />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Schedule />
      </TabPanel>
    </Box>
  );
}
