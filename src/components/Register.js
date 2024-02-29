import * as React from "react";
import Radio from "@mui/material/Radio";
import backg from "../Assets/caredac.jpg";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { RadioGroup } from "@mui/material";

const defaultTheme = createTheme();

export default function Register() {
  const [selectedLanguage, setSelectedLanguage] = React.useState("");
  const [redirecting, setRedirecting] = React.useState(false);

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
    // Add a delay before redirecting if you wanty
    if (event.target.value === "english") {
      setRedirecting(true);
      setTimeout(() => {
        window.location.href = "/login";
      });
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${backg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
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
            value={selectedLanguage}
            onChange={handleLanguageChange}
          >
            <Box
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "left",
                fontFamily: "Onest",
              }}
            >
              <Typography
                component="h1"
                variant="h4"
                fontWeight={600}
                sx={{ fontFamily: "Onest,sans-serif" }}
              >
                Select app language
              </Typography>
              <Typography
                component="h1"
                variant="h5"
                sx={{
                  marginTop: "10px",
                  fontSize: "16px",
                  color: "grey",
                  fontFamily: "Onest,sans-serif",
                  marginBottom: "16px  ",
                }}
              >
                Select language for your entire application
              </Typography>
              <Divider orientation="horizontal" flexItem />
              <Grid container sx={{ flexGrow: 1 }} marginTop={2} spacing={1}>
                <Grid item align="center" xs={6}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      backgroundColor: "#ff8339",
                      width: "160px",
                      height: "160px",
                      borderRadius: "16px",
                      margin: "5px",
                    }}
                  >
                    <FormControlLabel
                      sx={{
                        marginLeft: "10px",
                        fontFamily: "Onest,sans-serif",
                        color: "white",
                        display: "flex",
                        flexDirection: "row-reverse",
                      }}
                      value="english"
                      control={
                        <Radio
                          style={{
                            color:
                              selectedLanguage === "english"
                                ? "white"
                                : "white",
                          }}
                        />
                      } //control={<Radio />}
                      label="English"
                    />

                    <Typography
                      variant="h3"
                      sx={{
                        color:
                          selectedLanguage === "english" ? "white" : "white",
                        fontFamily: "Onest,sans-serif",
                      }}
                    >
                      A
                    </Typography>
                  </Box>
                </Grid>
                <Grid item align="center" xs={6}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      backgroundColor: "#ff8339",
                      width: "160px",
                      height: "160px",
                      borderRadius: "16px",
                      margin: "5px",
                    }}
                  >
                    <FormControlLabel
                      sx={{
                        marginLeft: "10px",
                        fontFamily: "Onest,sans-serif",
                        color: "white",
                        display: "flex",
                        flexDirection: "row-reverse",
                      }}
                      value="malaysia"
                      control={<Radio style={{ color: "white" }} />}
                      label="Malaysian"
                    />

                    <Typography
                      variant="h3"
                      sx={{
                        color: "white",
                        fontFamily: "Onest,sans-serif",
                      }}
                    >
                      M
                    </Typography>
                  </Box>
                </Grid>

                <Grid item align="center" xs={6}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      backgroundColor: "#ff8339",
                      width: "160px",
                      height: "160px",
                      borderRadius: "16px",
                      marginTop: "15px",
                    }}
                  >
                    <FormControlLabel
                      sx={{
                        marginLeft: "10px",
                        fontFamily: "Onest,sans-serif",
                        color: "white",
                        display: "flex",
                        flexDirection: "row-reverse",
                      }}
                      value="thai"
                      control={<Radio style={{ color: "white" }} />}
                      label="Thai"
                    />

                    <Typography
                      variant="h3"
                      sx={{
                        color: "white",
                        fontFamily: "Onest,sans-serif",
                      }}
                    >
                      ll
                    </Typography>
                  </Box>
                </Grid>
                <Grid item align="center" xs={6}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      backgroundColor: "#ff8339",
                      width: "160px",
                      height: "160px",
                      borderRadius: "16px",
                      marginTop: "15px ",
                    }}
                  >
                    <FormControlLabel
                      sx={{
                        marginLeft: "10px",
                        fontFamily: "Onest,sans-serif",
                        color: "white",
                        display: "flex",
                        flexDirection: "row-reverse",
                      }}
                      value="indo"
                      control={<Radio style={{ color: "white" }} />}
                      label="Indonesian"
                    />

                    <Typography
                      variant="h3"
                      sx={{
                        color: "white",
                        fontFamily: "Onest,sans-serif",
                      }}
                    >
                      l
                    </Typography>
                  </Box>
                </Grid>
              </Grid>

              <Grid item align="center">
                <Link href="/login" variant="body2"></Link>
              </Grid>
            </Box>
          </RadioGroup>
        </Container>
      </ThemeProvider>
    </div>
  );
}
