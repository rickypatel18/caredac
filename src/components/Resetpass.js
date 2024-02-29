import * as React from "react";
import backg from "../Assets/caredac.jpg";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
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

  const [confPassword, setConfPassword] = React.useState(false);
  const handleClickConfPassword = () => setConfPassword((show) => !show);

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    clearErrors,
  } = useForm({});

  const [selectedFile, setSelectedFile] = React.useState(null);

  const { setError } = useForm();
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (reader.result && reader.result.startsWith("data:image/")) {
          setSelectedFile(file);
        } else {
          clearErrors("file");
          setSelectedFile(null);
          setError("file", {
            type: "manual",
            message: "Please select an image file.",
          });
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = (data) => {
    if (!selectedFile) {
      return;
    }
    console.log(data);
    // window.location.href = "/login";
  };

  return (
    <div
      style={{
        backgroundImage: `url(${backg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        minHeight: "100vh", // Ensure the container fills the entire viewport height
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
              fontWeight={600}
              sx={{ fontFamily: "Onest,sans-serif" }}
            >
              Reset your password
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
              Change your password
            </Typography>
            <Divider orientation="horizontal" flexItem />

            <Box
              component="form"
              onSubmit={handleSubmit((data) => {
                console.log(data);
                window.location.href = "/login";
              })}
              noValidate
              sx={{ mt: 1 }}
            >
              <Typography
                component="h1"
                variant="h5"
                sx={{
                  marginBottom: "5px",
                  marginTop: "16  px",
                  fontSize: "16px",
                  color: "#344054",
                  fontFamily: "Onest,sans-serif",
                }}
              >
                Password
              </Typography>
              <TextField
                margin="normal"
                required
                fullWidth
                {...register("password", {
                  required: " Please enter a new password.",
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
                }}
              >
                {errors.password?.message}
              </Typography>
              <Typography
                component="h1"
                variant="h5"
                sx={{
                  marginBottom: "5px",
                  marginTop: "10px",
                  fontSize: "16px",
                  color: "#344054",
                  fontFamily: "Onest,sans-serif",
                }}
              >
                Confirm Password
              </Typography>
              <TextField
                margin="normal"
                required
                fullWidth
                {...register("confirm", {
                  required: "Re-enter your password.",
                  validate: (value) =>
                    value === getValues("password") ||
                    "The passwords do not match",
                })}
                type={confPassword ? "text" : "password"}
                id="confirm"
                autoComplete="current-password"
                placeholder="confirm password"
                sx={{
                  mt: "1px",
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
                        onClick={handleClickConfPassword}
                        edge="end"
                      >
                        {confPassword ? <Visibility /> : <VisibilityOff />}
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
                }}
              >
                {errors.confirm?.message}
              </Typography>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  padding: "10px 18px",
                  borderRadius: "40px",
                  textTransform: "none",
                  fontSize: "16px",
                  fontWeight: 600,
                  fontFamily: "Onest,sans-serif",
                }}
              >
                Submit
              </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
}
