import * as React from "react";
import Avatar from "@mui/material/Avatar";
import backg from "../Assets/caredac.jpg";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormGroup from "@mui/material/FormGroup";

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
import { Dialog, DialogTitle } from "@mui/material";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function Sign6() {
  const handleSubmit = (event) => {
    event.preventDefault();
    setOpen(true);
    // window.location.href = "/pop";
  };
  const [showPassword, setShowPassword] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleHome = () => {
    window.location.href = "/home";
  };

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
            <Typography component="h1" variant="h4">
              I have following qualification
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
              Select from the qualifications
            </Typography>

            <Divider orientation="horizontal" flexItem />
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox />}
                  label="Degree of Nursing"
                />
                <FormControlLabel
                  required
                  control={<Checkbox />}
                  label="Degree on social work"
                />

                <FormControlLabel
                  control={<Checkbox />}
                  label="Diploma of Nursing"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Degree on social work"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Diploma of Nursing"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Diploma of Nursing"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Diploma of Nursing"
                />

                <FormControlLabel
                  control={<Checkbox />}
                  label="Diploma of Nursing"
                />
              </FormGroup>

              <Button
                type="submit"
                onClick={handleSubmit}
                variant="contained"
                sx={{
                  marginTop: "14px",
                  px: "200px",
                }}
              >
                Next
              </Button>

              <Grid item align="center">
                <Link href="/sign6" variant="body2"></Link>
              </Grid>
            </Box>
          </Box>
          <Dialog open={open}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "400px",
                height: "100%", // Ensure the container takes up full height
              }}
            >
              <CheckBoxIcon
                sx={{
                  color: "green",
                  fontSize: 60,
                }}
              />
              <DialogTitle textAlign="center">
                Your checkup is submitted
              </DialogTitle>
              <Grid
                container
                spacing={2}
                direction="column"
                justifyContent="center"
                alignItems="center"
                style={{ height: "100%" }} // Ensure the grid takes up full height
              >
                <Grid item>
                  <Typography
                    component="h1"
                    variant="h5"
                    sx={{
                      fontSize: "15px",
                      color: "grey",
                      textAlign: "center",
                      p: 2,
                    }}
                  >
                    We will confirm you via email and your badge is shown in
                    your profile page.
                  </Typography>
                </Grid>
              </Grid>
              <Button
                type="submit"
                onClick={handleHome}
                variant="contained"
                sx={{
                  marginTop: "14px",
                  px: 2,
                  mb: 2,
                  mx: 2,
                }}
              >
                Go to Homepage
              </Button>
            </Box>
          </Dialog>
        </Container>
      </ThemeProvider>
    </div>
  );
}
