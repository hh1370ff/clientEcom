import { Typography, Box, Tabs, Tab } from "@mui/material";
import PropTypes from "prop-types";
import { useState } from "react";
import { aboutUsInfo } from "./aboutUsInfo";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
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

const AboutUs = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box
      sx={{
        minHeight: `calc(100vh - 64px)`,
      }}
    >
      <Box>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="Our Company" {...a11yProps(0)} />
          <Tab label="Our Goal" {...a11yProps(1)} />
          <Tab label="Thank You" {...a11yProps(2)} />
        </Tabs>
      </Box>

      {aboutUsInfo.map((item, index) => (
        <TabPanel value={value} index={index} key={index}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                md: "1fr 2fr",
              },
              gridTemplateRows: {
                xs: "300px 300px",
                md: "500px",
              },
              alignItems: "center",
              rowGap: "2rem",
              columnGap: "2rem",
            }}
          >
            <Box
              sx={{
                height: "max-content",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <Typography variant="h4" align="center">
                {item.title}
              </Typography>
              <Typography variant="body2" sx={{ textAlign: "center" }}>
                {item.content}
              </Typography>
            </Box>
            <Box sx={{ height: "100%" }}>
              <img
                src={item.imageUrl}
                alt=""
                style={{
                  objectFit: "cover",
                  height: "100%",
                  width: "100%",
                  borderRadius: "30px",
                }}
              />
            </Box>
          </Box>
        </TabPanel>
      ))}
    </Box>
  );
};

export default AboutUs;
