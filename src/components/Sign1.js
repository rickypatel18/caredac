import * as React from "react";
import Avatar from "@mui/material/Avatar";
import backg from "../Assets/caredac.jpg";

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

export default function Sign1() {
  const handleSubmit = (event) => {
    event.preventDefault();
    window.location.href = "/sign2";
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
            <Typography component="h1" variant="h4">
              Background check
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
              Give us some of your documents we will check your profie and
              submit your background check badge
            </Typography>
            <Divider orientation="horizontal" flexItem />
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <Typography
                component="h1"
                variant="h5"
                sx={{
                  marginBottom: "1px",
                  marginTop: "10px",
                  fontSize: "16px",
                }}
              >
                COVID-19 compliance
              </Typography>
              <TextField
                margin="normal"
                required
                fullWidth
                id="covid"
                name="covid"
                autoFocus
                sx={{
                  mt: "1px",
                }}
              />
              <Typography
                component="h1"
                variant="h5"
                sx={{
                  marginBottom: "1px",
                  marginTop: "10px",
                  fontSize: "16px",
                }}
              >
                First Aid Certification
              </Typography>
              <TextField
                margin="normal"
                required
                fullWidth
                id="certi"
                name="certi"
                autoFocus
                sx={{
                  mt: "1px",
                }}
              />
              <Typography
                component="h1"
                variant="h5"
                sx={{
                  marginBottom: "1px",
                  marginTop: "10px",
                  fontSize: "16px",
                }}
              >
                NDIS Worker Check(NDISWC)
              </Typography>
              <TextField
                margin="normal"
                required
                fullWidth
                id="ndis"
                name="ndis"
                autoFocus
                sx={{
                  mt: "1px",
                }}
              />

              <Typography
                component="h1"
                variant="h5"
                sx={{
                  marginBottom: "1px",
                  marginTop: "10px",
                  fontSize: "16px",
                }}
              >
                Police Check
              </Typography>
              <TextField
                margin="normal"
                required
                fullWidth
                id="police"
                name="poice"
                autoComplete
                autoFocus
                sx={{
                  mt: "1px",
                }}
              />

              <Typography
                component="h1"
                variant="h5"
                sx={{
                  marginBottom: "1px",
                  marginTop: "10px",
                  fontSize: "16px",
                }}
              >
                Working With Child Check
              </Typography>
              <TextField
                margin="normal"
                required
                fullWidth
                name="child"
                autoComplete
                sx={{
                  mt: "1px",
                }}
              />
              <Typography
                component="h1"
                variant="h5"
                sx={{
                  marginBottom: "1px",
                  marginTop: "10px",
                  fontSize: "16px",
                }}
              >
                Visa Documentation
              </Typography>
              <TextField
                margin="normal"
                required
                fullWidth
                name="visa "
                id="visa"
                autoComplete
                sx={{
                  mt: "1px",
                }}
              />

              <Button
                type="submit"
                onClick={handleSubmit}
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Next
              </Button>

              <Grid item align="center">
                <Link href="/sign1" variant="body2"></Link>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
}
