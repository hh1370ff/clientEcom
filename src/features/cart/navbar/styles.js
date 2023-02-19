import { Box, ListItemButton, styled, Typography } from "@mui/material";
import { colors } from "../../../styles/styles";
import { shades } from "../../../theme";

/* HOC */
export const Actions = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "1rem",
  [theme.breakpoints.down("md")]: {
    position: "fixed",
    bottom: 0,
    padding: "0.5rem",
    backgroundColor: colors.dark,
    width: "100%",
    left: 0,
    display: "flex",
    justifyContent: "space-evenly",
  },
}));
export const HeaderText = styled(Typography)(() => ({
  textAlign: "center",
}));
export const ListItemButtonWrapper = styled(ListItemButton)(() => ({
  padding: " 0px",
}));

/* styles */
export const styles = {
  appBar: {
    backgroundColor: colors.white,
    position: "sticky",
    boxShadow: "none",
  },
  container: {},
  company: {
    padding: "0 0.5rem",
    fontWeight: "900",
    color: shades.primary["700"],
    minWidth: "max-content",
    cursor: "pointer",
    flex: {
      xs: 1,
      md: 0,
    },
    textAlign: {
      xs: "center",
      md: "left",
    },
  },
  list: {
    justifyContent: "space-evenly",
    flex: 1,
    color: "black",
    display: {
      xs: "none",
      md: "flex",
    },
  },
  menuButton: {
    display: {
      xs: "block",
      md: "none",
    },
  },
  iconStyle: {
    color: {
      xs: "white",
      md: "black",
    },
  },
};
