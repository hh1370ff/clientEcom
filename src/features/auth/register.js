import { Button, Grid, Paper, Typography, Box } from "@mui/material";
import { useState } from "react";
import {
  registrationInputs,
  registrationInputsSchema,
} from "../../inputFormSource";
import { getInput } from "../../utils/getInput";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { shades } from "../../theme";
import CustomizedSnackbar from "../../component/common/snackbar/CustomizedSnackbar";

import { useLocation, useNavigate } from "react-router-dom";
import { axiosPublicInstance } from "../../api/axiosInstance";
import { login } from "./authSlice";
import { colors } from "../../styles/styles";
import { useDispatch } from "react-redux";
const Register = ({ setIsLoginPage }) => {
  /* redux dispatch */
  const dispatch = useDispatch();

  /* navigate & location hooks */
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  /* snackBars' states */

  const [openError, setOpenError] = useState();
  const [resMessage, setResMessage] = useState();

  /* snackBars' handlers */

  const handleErrorClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenError(false);
  };
  const onError = () => {
    setOpenError(true);
  };

  /* useForm hook */
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registrationInputsSchema),
    mode: "onTouched",
  });

  /* register user */
  const registerUser = async (data, event) => {
    event.preventDefault();
    const { passwordConfirmation, ...user } = data;
    try {
      const res = await axiosPublicInstance.post("/users/register", user);
      try {
        await dispatch(login(user)).unwrap();
      } catch (error) {
        setResMessage(error.message);
        setOpenError(true);
      }
      navigate(from, { replace: true });
    } catch (err) {
      setResMessage(err.response.data.message);
      setOpenError(true);
    }
  };

  const content = (
    <Grid
      container
      spacing={0.5}
      sx={{
        width: "100%",
        justifyContent: "center",
        alignContent: "center",
        height: "100vh",
      }}
    >
      <Paper
        elevation={4}
        sx={{
          padding: "2rem",
          width: { xs: "80%", sm: "40%", md: "30%" },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Button
          sx={{ mb: "1rem", color: colors.danger }}
          onClick={() => navigate("/")}
        >
          Back to Home
        </Button>

        <Typography
          variant="h4"
          sx={{
            padding: "0 0.5rem",
            fontWeight: "900",
            color: shades.primary["700"],
            width: "100%",
            textAlign: "center",
            mb: "2rem",
          }}
        >
          DRESS Up
        </Typography>
        <Box>
          {registrationInputs.map((item) => {
            const { ref, ...otherProps } = register(item.name);
            return (
              <Grid item xs={12} key={item.name}>
                {getInput(item, ref, otherProps, errors)}
              </Grid>
            );
          })}
          <Button
            variant="contained"
            sx={{
              textAlign: "center",
              width: "100%",
              fontWeight: "Bold",
            }}
            onClick={handleSubmit((data, event) => registerUser(data, event))}
          >
            Please register
          </Button>
          <Button
            sx={{
              textAlign: "center",
              width: "100%",
            }}
            onClick={() => setIsLoginPage(true)}
          >
            Switch to Login page?
          </Button>
        </Box>
      </Paper>

      <CustomizedSnackbar
        open={openError}
        handleClose={handleErrorClose}
        severity="error"
        message={resMessage}
      />
    </Grid>
  );

  return content;
};

export default Register;
