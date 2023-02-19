import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { MobileStepper } from "@mui/material";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

const steps = [
  "Customer information",
  "Recipient information",
  "Payment",
  "Confirmation",
];

const CustomizedMobileStepper = ({
  activeStep,
  handleActiveStep,
  isCompleted,
  completedSteps,
  stepContent,
}) => {
  const theme = useTheme();
  const maxSteps = steps.length;

  return (
    <Box
      sx={{
        mx: "auto",
        width: "90%",
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Paper
        square
        elevation={0}
        sx={{
          display: "flex",
          alignItems: "center",
          bgcolor: "background.default",
          mb: "1rem",
        }}
      >
        <Typography>{steps[activeStep]}</Typography>
      </Paper>

      <Box sx={{ height: "max-content", maxWidth: 400, width: "100%" }}>
        {stepContent}
      </Box>
      <MobileStepper
        variant="text"
        steps={maxSteps}
        sx={{
          maxWidth: 400,
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignContent: "center",
          mb: "1rem",
        }}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            variant="contained"
            size="small"
            sx={{
              visibility: isCompleted ? "hidden" : "visible",
              display: "flex",
              justifyContent: "space-between",
              alignContent: "center",
            }}
            disabled={completedSteps[activeStep] === false}
            onClick={() => {
              handleActiveStep(1);
            }}
          >
            Next
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button
            variant="contained"
            size="small"
            onClick={() => {
              handleActiveStep(-1);
            }}
            disabled={activeStep <= 0}
            sx={{
              visibility: isCompleted ? "hidden" : "visible",
              display: "flex",
              justifyContent: "space-between",
              alignContent: "center",
            }}
          >
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
};

export default CustomizedMobileStepper;
