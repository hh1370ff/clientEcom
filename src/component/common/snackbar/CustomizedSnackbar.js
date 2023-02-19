import React from "react";
import Snackbar from "@mui/material/Snackbar";
import { Alert, Typography } from "@mui/material";
const CustomizedSnackbar = ({
  open,
  handleClose,
  severity,
  width,
  message,
}) => {
  const content = (
    <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
      <Alert
        onClose={handleClose}
        severity={severity}
        sx={{ width: `${width} || "400px"` }}
      >
        <Typography variant="subtitle2">{message}</Typography>
      </Alert>
    </Snackbar>
  );
  return content;
};

export default CustomizedSnackbar;
