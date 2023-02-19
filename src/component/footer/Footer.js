import {
  Button,
  Grid,
  List,
  ListItemText,
  TextField,
  Typography,
  Box,
} from "@mui/material";
import Divider from "@mui/material/Divider";
import React from "react";
import { FooterTitle, SubscribeTf } from "./styles";
import SendIcon from "@mui/icons-material/Send";
import { colors } from "../../styles/styles";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
const Footer = () => {
  const content = (
    <Grid
      container
      spacing={2}
      rowGap="2rem"
      sx={{
        backgroundColor: colors.dark,
        color: "white",
        py: "4rem",
        width: "100%",
        px: "1rem",
        m: 0,
      }}
    >
      <Grid
        item
        md={4}
        xs={12}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          alignItems: {
            xs: "center",
            md: "start",
          },
        }}
      >
        <FooterTitle variant="h6">about us</FooterTitle>
        <Typography variant="subtitle1">
          Our company is a leading ecommerce platform for clothing and fashion
          items. We strive to provide the latest fashion trends and styles to
          our customers at an affordable price. Our team is dedicated to
          delivering the best shopping experience possible and we are committed
          to delivering high-quality products to our customers.
        </Typography>
        <Box sx={{ display: "flex", gap: "0.5rem" }}>
          <FacebookIcon />
          <TwitterIcon />
          <InstagramIcon />
        </Box>
        <Divider
          sx={{
            width: "100%",
            borderColor: "white",
            visibility: { xs: "visible", md: "hidden" },
          }}
        />
      </Grid>

      <Grid
        item
        md={2}
        xs={6}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          alignItems: {
            xs: "center",
            md: "start",
          },
        }}
      >
        <FooterTitle variant="h6">information</FooterTitle>
        <List
          sx={{
            padding: 0,
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
          }}
        >
          <ListItemText sx={{ marginTop: 0 }}>
            <Typography variant="subtitle1">About us</Typography>
          </ListItemText>
          <ListItemText>
            <Typography variant="subtitle1">Order Tracking</Typography>
          </ListItemText>
          <ListItemText>
            <Typography variant="subtitle1">Privacy &amp; Policy</Typography>
          </ListItemText>
          <ListItemText>
            <Typography variant="subtitle1">Terms &amp; Conditions</Typography>
          </ListItemText>
        </List>
        <Divider
          sx={{
            width: "100%",
            borderColor: "white",
            visibility: { xs: "visible", md: "hidden" },
          }}
        />
      </Grid>

      <Grid
        item
        md={2}
        xs={6}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          alignItems: {
            xs: "center",
            md: "start",
          },
        }}
      >
        <FooterTitle variant="h6">my account</FooterTitle>
        <List
          sx={{
            padding: 0,
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
          }}
        >
          <ListItemText sx={{ marginTop: 0 }}>
            <Typography variant="subtitle1">Login</Typography>
          </ListItemText>
          <ListItemText>
            <Typography variant="subtitle1">My cart</Typography>
          </ListItemText>
          <ListItemText>
            <Typography variant="subtitle1">My account</Typography>
          </ListItemText>
          <ListItemText>
            <Typography variant="subtitle1">wish list</Typography>
          </ListItemText>
        </List>
        <Divider
          sx={{
            width: "100%",
            borderColor: "white",
            visibility: { xs: "visible", md: "hidden" },
          }}
        />
      </Grid>

      <Grid
        item
        md={4}
        xs={12}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          alignItems: {
            xs: "center",
            md: "start",
          },
        }}
      >
        <FooterTitle variant="h6">newsletter</FooterTitle>
        <SubscribeTf label="Email address" variant="standard" fullWidth />
        <Button
          variant="contained"
          sx={{ width: "100%" }}
          startIcon={<SendIcon />}
        >
          SUBSCRIBE
        </Button>
      </Grid>
    </Grid>
  );
  return content;
};

export default Footer;
