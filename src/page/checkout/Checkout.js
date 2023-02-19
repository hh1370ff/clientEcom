import { Box, LinearProgress, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import ProgressStepper from "./ProgressStepper";
import CustomizedSnackbar from "../../component/common/snackbar/CustomizedSnackbar";
import CustomerForm from "./CustomerForm";
import RecipientForm from "./RecipientForm";
import Payment from "./Payment";
import Confirmation from "./Confirmation";
import { useTheme } from "@mui/material/styles";
import CustomizedMobileStepper from "./CustomizedMobileStepper";
const Checkout = () => {
  /* client using mobile or desktop */
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  /* states and handlers for stepper */
  const [activeStep, setActiveStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState({
    0: false,
    1: false,
    2: false,
    3: false,
  });

  const isCompleted = activeStep > 3;

  const handleActiveStep = (value) => {
    setActiveStep((pre) => pre + value);
  };

  /* snackBar state and handler */
  const [loading, setLoading] = useState(false);
  const [openError, setOpenError] = useState();

  const handleErrorClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenError(false);
  };
  const submitError = () => {
    setOpenError(true);
  };

  /* stepper's content based on active step */
  let stepContent;

  switch (activeStep) {
    case 0:
      stepContent = (
        <CustomerForm
          submitError={submitError}
          setLoading={setLoading}
          setCompletedSteps={setCompletedSteps}
          activeStep={activeStep}
          setActiveStep={setActiveStep}
        />
      );
      break;
    case 1:
      stepContent = (
        <RecipientForm
          submitError={submitError}
          setLoading={setLoading}
          setCompletedSteps={setCompletedSteps}
          activeStep={activeStep}
          setActiveStep={setActiveStep}
        />
      );
      break;
    case 0:
      stepContent = <Payment />;
      break;
    case 0:
      stepContent = <Confirmation />;
      break;
  }

  /*  rendered content */
  let content = (
    <Box sx={{ minHeight: `calc(100vh - 64px)` }}>
      {isMobile ? (
        <CustomizedMobileStepper
          activeStep={activeStep}
          handleActiveStep={handleActiveStep}
          isCompleted={isCompleted}
          completedSteps={completedSteps}
          stepContent={stepContent}
        />
      ) : (
        <ProgressStepper
          activeStep={activeStep}
          handleActiveStep={handleActiveStep}
          isCompleted={isCompleted}
          completedSteps={completedSteps}
          stepContent={stepContent}
        />
      )}

      <CustomizedSnackbar
        open={openError}
        handleClose={handleErrorClose}
        severity="error"
        message="This error created on purpose to fake an error. Try again you have 50% chance to success."
      />
    </Box>
  );
  if (loading)
    content = (
      <LinearProgress
        color="secondary"
        sx={{ minHeight: `calc(100vh - 64px)` }}
      />
    );

  return content;
};

export default Checkout;
