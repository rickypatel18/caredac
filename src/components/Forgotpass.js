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
import { useForm } from "react-hook-form";

const defaultTheme = createTheme();

export default function Forgotpass() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [redirect, setRedirect] = React.useState(false); 

  const onSubmit = (data) => {
    console.log(data);
    setRedirect(true); // Set redirect to true after form submission
  };

  React.useEffect(() => {
    if (redirect) {
      setTimeout(() => {
        window.location.href = "/otp";
      }, 0); // Redirect after "" second
    }
  }, [redirect]);

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
              variant="h4"
              fontWeight={"600"}
              sx={{ fontFamily: "Onest" }}
            >
              Forgot your Password?
            </Typography>
            <Typography
              component="h1"
              variant="h5"
              sx={{
                marginTop: "10px",
                fontSize: "16px",
                color: "#667085",
                marginBottom: "16px",
                fontFamily: "Onest,sans-serif",
              }}
            >
              Get a secure one-time link to log in without needing to enter a
              password.
            </Typography>
            <Divider orientation="horizontal" flexItem />
            <Box
              component="form"
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              sx={{ marginTop: "20px" }}
            >
              <Typography
                component="h1"
                variant="h5"
                sx={{
                  marginBottom: "1px",
                  marginTop: "10px",
                  fontSize: "16px",
                  fontWeight: "500",
                  color: "#344054",
                  fontFamily: "Onest,sans-serif",
                }}
              >
                Email
              </Typography>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                name="email"
                autoComplete="email"
                autoFocus
                placeholder="Enter email"
                sx={{
                  mt: "5px",
                  color: "red",
                }}
                InputProps={{
                  sx: {
                    color: "#667085",
                    borderRadius: "12px",
                    fontFamily: "Onest,sans-serif",
                  },
                  startAdornment: (
                    <InputAdornment position="start">
                      <MailOutlineIcon />
                    </InputAdornment>
                  ),
                }}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && (
                <Typography variant="body2" color="red">
                  {errors.email.message}
                </Typography>
              )}

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 4,
                  borderRadius: "40px",
                  bgcolor: "#024FAA",
                  fontWeight: "600",
                  textTransform: "none",
                  padding: "10px 18px",
                  fontSize: "16px",
                  fontFamily: "Onest,sans-serif",
                }}
              >
                Submit
              </Button>
              <Grid item align="center">
                <Link
                  href="/login"
                  variant="body2"
                  sx={{
                    color: "#024FAA",
                    textDecoration: "none",
                    fontWeight: "600",
                    fontSize: "16px",
                    fontFamily: "Inter,sans-serif",
                  }}
                >
                  Back to Login
                </Link>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
}
