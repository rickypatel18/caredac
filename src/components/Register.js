import * as React from "react";
import Radio from "@mui/material/Radio";
import backg from "../Assets/caredac.jpg";
import Avatar from "@mui/material/Avatar";
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
import { RadioGroup } from "@mui/material";

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function Register() {
  const handleSubmit = (event) => {
    event.preventDefault();
    window.location.href = "/Signup";
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
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
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
            sx={{
              mx: 1,
              color: "default",
            }}
          >
            <Box
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "left",
              }}
            >
              <Typography component="h1" variant="h4">
                Select app languages
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
                Select language for your entire application
              </Typography>
              <Divider orientation="horizontal" flexItem />
              <Grid container sx={{ flexGrow: 1 }} marginTop={1} spacing={1}>
                <Grid item align="center" xs={5}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      backgroundColor: "#ff8339",
                      width: "150px",
                      height: "150px",
                      borderRadius: "10px",
                    }}
                  >
                    <FormControlLabel
                      sx={{
                        marginLeft: "10px",
                      }}
                      value="english"
                      control={<Radio />}
                      label="English"
                    />

                    <Typography
                      variant="h3"
                      sx={{
                        color: "white",
                      }}
                    >
                      A
                    </Typography>
                  </Box>
                </Grid>
                <Grid item align="center" xs={5}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      backgroundColor: "#ff8339",
                      width: "150px",
                      height: "150px",
                      borderRadius: "10px",
                    }}
                  >
                    <FormControlLabel
                      sx={{
                        marginLeft: "10px",
                      }}
                      value="malaysia"
                      control={<Radio />}
                      label="Malaysian"
                    />

                    <Typography
                      variant="h3"
                      sx={{
                        color: "white",
                      }}
                    >
                      M
                    </Typography>
                  </Box>
                </Grid>
                <Grid item align="center" xs={5}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      backgroundColor: "#ff8339",
                      width: "150px",
                      height: "150px",
                      borderRadius: "10px",
                    }}
                  >
                    <FormControlLabel
                      sx={{
                        marginLeft: "10px",
                      }}
                      value="thai"
                      control={<Radio />}
                      label="Thai"
                    />

                    <Typography
                      variant="h3"
                      sx={{
                        color: "white",
                      }}
                    >
                      ll
                    </Typography>
                  </Box>
                </Grid>
                <Grid item align="center" xs={5}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      backgroundColor: "#ff8339",
                      width: "150px",
                      height: "150px",
                      borderRadius: "10px",
                    }}
                  >
                    <FormControlLabel
                      sx={{
                        marginLeft: "10px",
                      }}
                      value="indo"
                      control={<Radio />}
                      label="Indonesian"
                    />

                    <Typography
                      variant="h3"
                      sx={{
                        color: "white",
                      }}
                    >
                      l
                    </Typography>
                  </Box>
                </Grid>
              </Grid>

              <Button
                type="submit"
                onClick={handleSubmit}
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Submit
              </Button>

              <Grid item align="center">
                <Link href="/register" variant="body2"></Link>
              </Grid>
            </Box>
          </RadioGroup>
        </Container>
      </ThemeProvider>
    </div>
  );
}
