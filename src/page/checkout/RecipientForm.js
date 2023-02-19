import { recipientInputs } from "../../inputFormSource";
import { recipientInputsSchema } from "../../inputFormSource";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { getInput } from "../../utils/getInput";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import React from "react";

const RecipientForm = ({
  submitSuccess,
  submitError,
  setLoading,
  setCompletedSteps,
  activeStep,
  setActiveStep,
}) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(recipientInputsSchema),
    mode: "onTouched",
  });

  const handleSubmitForm = () => {
    try {
      if (Math.random() < 0.5) {
        throw new Error();
      }
      setLoading(true);
      setTimeout(() => {
        submitSuccess();
        setLoading(false);
      }, 2000);
      setCompletedSteps((pre) => ({ ...pre, [activeStep]: true }));
      setActiveStep(activeStep + 1);
    } catch (err) {
      submitError();
    }
  };

  let content = (
    <Box
      sx={{
        mx: "auto",
        width: "70%",
        display: "grid",
        columnGap: "2rem",
        rowGap: ".2rem",
        mb: {
          xs: "2rem",
          md: "0px",
        },
        gridTemplateColumns: {
          xs: "1fr",
          md: "1fr 1fr",
        },
      }}
    >
      {recipientInputs.map((item) => {
        const { ref, ...otherProps } = register(item.name);
        return getInput(item, ref, otherProps, errors);
      })}

      <Button
        sx={{
          gridColumn: {
            md: "1/span 2",
          },
          border: "1px solid purple",
          "&:hover": {
            backgroundColor: "rgba(191, 64, 191, 0.2)",
          },
        }}
        onClick={handleSubmit(handleSubmitForm)}
      >
        Submit
      </Button>
    </Box>
  );
  return content;
};

export default RecipientForm;
