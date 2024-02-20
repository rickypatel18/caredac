import * as React from "react";
import Avatar from "@mui/material/Avatar";
import backg from "../Assets/caredac.jpg";
import { useForm } from "react-hook-form";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";

import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
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
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();

    window.location.href = "/sign1";
  };
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <div
      style={{
        backgroundImage: `url(${backg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
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
            <Typography component="h1" variant="h3">
              OTP Verification
            </Typography>
            <Typography
              component="h1"
              variant="h5"
              sx={{
                marginTop: "10px",
                fontSize: "16px",
                color: "grey",
              }}
            >
              Enter the OTP sent to your email here
            </Typography>
            <Divider orientation="horizontal" flexItem />
            <Typography
              component="h1"
              variant="h5"
              sx={{
                marginTop: "10px",
                fontSize: "16px",
                color: "grey",
              }}
            >
              OTP code
            </Typography>
            <Grid container sx={{ flexGrow: 1 }} spacing={1}>
              <Grid item align="center" xs={2}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="e1"
                  name="e1"
                  autoFocus
                  sx={{
                    mt: "1px",
                  }}
                />
              </Grid>
              <Grid item align="center" xs={2}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="e2"
                  name="e2"
                  autoFocus
                  sx={{
                    mt: "1px",
                  }}
                />
              </Grid>
              <Grid item align="center" xs={2}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="e3"
                  name="e3"
                  autoFocus
                  sx={{
                    mt: "1px",
                  }}
                />
              </Grid>
              <Grid item align="center" xs={2}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="e4"
                  name="e4"
                  autoFocus
                  sx={{
                    mt: "1px",
                  }}
                />
              </Grid>
            </Grid>

            <Button
              type="submit"
              onClick={handleSubmit}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Verify
            </Button>
            <Typography
              component="h1"
              variant="h5"
              sx={{
                marginTop: "10px",
                fontSize: "16px",
                color: "grey",
                marginBottom: "10px",
              }}
            >
              Didn't receive otp?{" "}
              <Link
                component="button"
                variant="body2"
                onClick={() => {
                  console.info("I'm a button.");
                }}
              >
                Resend
              </Link>
            </Typography>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
}
