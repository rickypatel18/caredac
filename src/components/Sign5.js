import * as React from "react";
import backg from "../Assets/caredac.jpg";
import Button from "@mui/material/Button";
import FormGroup from "@mui/material/FormGroup";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useForm } from "react-hook-form";

const defaultTheme = createTheme();

export default function Sign5() {
  const [selectedLanguage, setSelectedLanguage] = React.useState([]);
  const [error, setError] = React.useState("");

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedLanguage((prevSelected) => [...prevSelected, value]);
      setError("");
    } else {
      setSelectedLanguage((prevSelected) =>
        prevSelected.filter((item) => item !== value)
      );
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedLanguage.length === 0) {
      setError("Please select at least one Language.");

      return;
    }
    window.location.href = "/sign6";
  };

  const {
    formState: { errors },
  } = useForm({});

  return (
    <div
      style={{
        backgroundImage: ` url(${backg})`,
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
              fontWeight={600}
              sx={{ fontFamily: "Onest,sans-serif" }}
            >
              I can speak
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
              Select multiple languages
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
                  control={
                    <Checkbox
                      sx={{
                        "&.Mui-checked": {
                          color: "#FC9155",
                        },
                      }}
                      onChange={handleCheckboxChange}
                      value="Hindi"
                    />
                  }
                  label={
                    <span
                      style={{
                        color: "#344054",
                        fontWeight: "500",
                        fontFamily: "Onest,sans-serif",
                      }}
                    >
                      Hindi
                    </span>
                  }
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{
                        "&.Mui-checked": {
                          color: "#FC9155",
                        },
                      }}
                      onChange={handleCheckboxChange}
                      value="English"
                    />
                  }
                  label={
                    <span
                      style={{
                        color: "#344054",
                        fontWeight: "500",
                        fontFamily: "Onest,sans-serif",
                      }}
                    >
                      English
                    </span>
                  }
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{
                        "&.Mui-checked": {
                          color: "#FC9155",
                        },
                      }}
                      onChange={handleCheckboxChange}
                      value="Malaysian"
                    />
                  }
                  label={
                    <span
                      style={{
                        color: "#344054",
                        fontWeight: "500",
                        fontFamily: "Onest,sans-serif",
                      }}
                    >
                      Malaysian
                    </span>
                  }
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{
                        "&.Mui-checked": {
                          color: "#FC9155",
                        },
                      }}
                      onChange={handleCheckboxChange}
                      value="Spanish"
                    />
                  }
                  label={
                    <span
                      style={{
                        color: "#344054",
                        fontWeight: "500",
                        fontFamily: "Onest,sans-serif",
                      }}
                    >
                      Spanish
                    </span>
                  }
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{
                        "&.Mui-checked": {
                          color: "#FC9155",
                        },
                      }}
                      onChange={handleCheckboxChange}
                      value="Japanese"
                    />
                  }
                  label={
                    <span
                      style={{
                        color: "#344054",
                        fontWeight: "500",
                        fontFamily: "Onest,sans-serif",
                      }}
                    >
                      Japanese
                    </span>
                  }
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{
                        "&.Mui-checked": {
                          color: "#FC9155",
                        },
                      }}
                      onChange={handleCheckboxChange}
                      value="Arabic"
                    />
                  }
                  label={
                    <span
                      style={{
                        color: "#344054",
                        fontWeight: "500",
                        fontFamily: "Onest,sans-serif",
                      }}
                    >
                      Arabic
                    </span>
                  }
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{
                        "&.Mui-checked": {
                          color: "#FC9155",
                        },
                      }}
                      onChange={handleCheckboxChange}
                      value="Indonesian"
                    />
                  }
                  label={
                    <span
                      style={{
                        color: "#344054",
                        fontWeight: "500",
                        fontFamily: "Onest,sans-serif",
                      }}
                    >
                      Indonesian
                    </span>
                  }
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{
                        "&.Mui-checked": {
                          color: "#FC9155",
                        },
                      }}
                      onChange={handleCheckboxChange}
                      value="Thai"
                    />
                  }
                  label={
                    <span
                      style={{
                        color: "#344054",
                        fontWeight: "500",
                        fontFamily: "Onest,sans-serif",
                      }}
                    >
                      Thai
                    </span>
                  }
                />
              </FormGroup>

              {error && (
                <Typography variant="body2" color="red">
                  {error}
                </Typography>
              )}

              <Button
                type="submit"
                variant="contained"
                sx={{
                  marginTop: "14px",
                  px: "200px",
                  bgcolor: "#024FAA",
                  borderRadius: "40px",
                  border: "1px solid #024FAA ",
                  textTransform: "none",
                  paddingTop: "10px",
                  paddingBottom: "10px",
                  fontSize: "16px",
                  fontWeight: 600,
                  fontFamily: "Onest,sans-serif",
                }}
              >
                Next
              </Button>

              <Grid item align="center">
                <Link href="/sign5" variant="body2"></Link>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
}
