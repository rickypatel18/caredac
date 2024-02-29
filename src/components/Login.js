import * as React from "react";
import backg from "../Assets/caredac.jpg";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import InputAdornment from "@mui/material/InputAdornment";
import LockIcon from "@mui/icons-material/Lock";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import { useForm } from "react-hook-form";

const defaultTheme = createTheme();

export default function Login() {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const {
    register,
    handleSubmit,
    watch,
    errors,
    formState: { errors: formErrors },
  } = useForm({});

  return (
    <div
      style={{
        backgroundImage: `url(${backg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "left",
            }}
          >
            <Typography
              component="h1"
              variant="h4 "
              sx={{ fontWeight: 600, fontFamily: "Onest,sans-serif" }}
            >
              Log In
            </Typography>
            <Typography
              component="h1"
              variant="h5"
              sx={{
                marginTop: "10px",
                fontSize: "16px",
                color: "grey",
                marginBottom: "16px",
                fontFamily: "Onest,sans-serif",
              }}
            >
              Welcome to CareDac
            </Typography>
            <Divider orientation="horizontal" flexItem />
            <Box
              component="form"
              onSubmit={handleSubmit((data) => {
                console.log(data);
                window.location.href = "/home";
              })}
              noValidate
              sx={{ mt: 1 }}
            >
              <Typography
                component="h1"
                variant="h5"
                sx={{
                  marginBottom: "10px",
                  marginTop: "10px",
                  fontSize: "16px",
                  color: "#344054",
                  fontWeight: "500",
                  fontFamily: "Onest,sans-serif",
                }}
              >
                Email
              </Typography>
              <TextField
                margin="normal"
                required
                placeholder="Enter email"
                fullWidth
                id="email"
                {...register("email", {
                  required: "Please enter your email.",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Invalid email address",
                  },
                })}
                autoFocus
                sx={{
                  mt: "1px",
                  color: "#667085",
                }}
                InputProps={{
                  sx: {
                    borderRadius: "12px",
                    fontFamily: "Onest,sans-serif",
                  },
                  startAdornment: (
                    <InputAdornment position="start">
                      <MailOutlineIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <Typography
                component="h1"
                variant="h6"
                color="text.secondary"
                fontSize={14}
                sx={{
                  ml: "10px",
                  color: "red",
                }}
              >
                {formErrors.email?.message}
              </Typography>

              <Typography
                component="h1"
                variant="h5"
                sx={{
                  marginBottom: "1px",
                  marginTop: "10px",
                  fontSize: "16px",
                  fontWeight: "500",
                  fontFamily: "Onest,sans-serif",
                  marginBottom: "10px",
                  color: "#344054",
                }}
              >
                Password
              </Typography>
              <TextField
                margin="normal"
                required
                fullWidth
                {...register("password", {
                  required: "Please enter your password.",
                  minLength: {
                    value: 6,
                    message: "Password should be at least 6 characters long.",
                  },
                })}
                type={showPassword ? "text" : "password"}
                id="password"
                autoComplete="current-password"
                placeholder="Enter password"
                sx={{
                  mt: "1px",
                  color: "#667085",
                  fontFamily: "Onest",
                }}
                InputProps={{
                  sx: {
                    borderRadius: "12px",
                    fontFamily: "Onest,sans-serif",
                  },
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockIcon />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        edge="end"
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <Typography
                component="h1"
                variant="h6"
                color="text.secondary"
                fontSize={14}
                sx={{
                  ml: "10px",
                  color: "red",
                  marginBottom: "12px",
                }}
              >
                {formErrors.password?.message}
              </Typography>
              <Grid item align="center">
                <Link
                  href="forgot"
                  variant="body2"
                  sx={{
                    textDecoration: "none",
                    color: "#024FAA",
                    fontWeight: "600",
                    fontSize: "14px",
                    fontFamily: "Inter,sans-serif",
                  }}
                >
                  Forgot password?
                </Link>
              </Grid>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 4,
                  textTransform: "none",
                  fontSize: "16px",
                  color: "white",
                  bgcolor: "#024FAA",
                  borderRadius: "40px",
                  padding: "10px 18px",
                  fontFamily: "Onest,sans-serif",
                }}
              >
                Log In
              </Button>

              <Grid item align="center">
                <span
                  style={{
                    fontWeight: "400",
                    color: "#667085",
                    fontSize: "16px",
                    fontFamily: "Onest,sans-serif",
                  }}
                >
                  Don't have an account?{" "}
                </span>
                <Link
                  href="/signup"
                  variant="body2"
                  sx={{
                    textDecoration: "none",
                    color: "#024FAA",
                    fontWeight: "600",
                    fontFamily: "Inter",
                  }}
                >
                  Sign Up
                </Link>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
}
