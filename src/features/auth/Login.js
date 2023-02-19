import { Button, Grid, Paper, Typography, Box } from "@mui/material";
import { useState } from "react";
import {
  registrationInputs,
  registrationInputsSchema,
  loginInputs,
  loginInputsSchema,
} from "../../inputFormSource";
import { getInput } from "../../utils/getInput";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { shades } from "../../theme";
import { useLocation, useNavigate } from "react-router";
import CustomizedSnackbar from "../../component/common/snackbar/CustomizedSnackbar";
import {
  login,
  selectCurrentToken,
  selectError,
  selectRole,
  selectStatus,
} from "./authSlice";
import { useSelector, useDispatch } from "react-redux";
import { colors } from "../../styles/styles";
const Login = ({ setIsLoginPage }) => {
  const currentAccessToken = useSelector(selectCurrentToken);
  const role = useSelector(selectRole);

  /* redux dispatch*/
  const dispatch = useDispatch();

  /* navigate & location hook */
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
    resolver: yupResolver(loginInputsSchema),
    mode: "onTouched",
  });

  /* login user */
  const loginUser = async (data, event) => {
    event.preventDefault();

    try {
      const res = await dispatch(login(data)).unwrap();

      navigate(from, { replace: true });
    } catch (err) {
      setResMessage(err.message);
      onError();
    }
  };

  /* rendered content */
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
        {role === "user" && from === "/admin" && (
          <Typography
            variant="h6"
            sx={{
              padding: "0 0.5rem",
              fontWeight: "900",
              color: colors.danger,
              width: "100%",
              textAlign: "center",
              mb: "2rem",
            }}
          >
            You not Admin
          </Typography>
        )}

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
          {loginInputs.map((item) => {
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
            onClick={handleSubmit((data, event) => loginUser(data, event))}
          >
            Please login
          </Button>
          <Button
            sx={{
              textAlign: "center",
              width: "100%",
            }}
            onClick={() => setIsLoginPage(false)}
          >
            Switch to Register page?
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

export default Login;
