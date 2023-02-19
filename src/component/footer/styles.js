import { styled, TextField, Typography } from "@mui/material";

export const FooterTitle = styled(Typography)(() => ({
  color: "white",
  textTransform: "uppercase",
}));

export const SubscribeTf = styled(TextField)(() => ({
  ".MuiInputLabel-root": {
    color: "white",
  },

  ".MuiInput-root::before": {
    borderBottom: "1px solid white",
  },
}));
