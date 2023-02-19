import React, { useState } from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
const steps = [
  "Customer information",
  "Recipient information",
  "Payment",
  "Confirmation",
];

const ProgressStepper = ({
  activeStep,
  isCompleted,
  handleActiveStep,
  completedSteps,
  stepContent,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        minHeight: `calc(100vh - 64px)`,
        width: "70%",
        mx: "auto",
      }}
    >
      <Stepper activeStep={activeStep}>
        {steps.map((step) => (
          <Step key={step}>
            <StepLabel>{step}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <Box>
        {stepContent}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mt: "2rem",
          }}
        >
          <Button
            variant="contained"
            onClick={() => {
              handleActiveStep(-1);
            }}
            disabled={activeStep <= 0}
            sx={{ display: isCompleted ? "none" : "inline-block" }}
          >
            Back
          </Button>

          <Button
            variant="contained"
            sx={{ display: isCompleted ? "none" : "inline-block" }}
            disabled={completedSteps[activeStep] !== true}
            onClick={() => {
              handleActiveStep(1);
            }}
          >
            Next
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ProgressStepper;
