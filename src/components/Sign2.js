import * as React from "react";
import backg from "../Assets/caredac.jpg";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import InputAdornment from "@mui/material/InputAdornment";
import { useForm } from "react-hook-form";
import { useState } from "react";

const defaultTheme = createTheme();

export default function Sign2() {
  const [selectedCv, setSelectedCv] = React.useState("");
  const [radioError, setRadioError] = React.useState(false);

  const [selectedDisWorker, setSelectedDisWorker] = React.useState("");
  const [radioError1, setRadioError1] = React.useState(false);

  const [selectedHour, setSelectedHour] = React.useState("");
  const [radioError2, setRadioError2] = React.useState(false);

  const [selectedExp, setSelectedExp] = React.useState(null);
  const [textError, setTextError] = React.useState(false);

  const [selectedPoliceCheck, setSelectedPoliceCheck] = React.useState("");
  const [radioError3, setRadioError3] = React.useState(false);

  const [selectedFile, setSelectedFile] = React.useState(null);
  const [fileError, setFileError] = React.useState(false);

  const handleCv = (event) => {
    setSelectedCv(event.target.value);
    setRadioError(false);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setFileError(false);
  };

  const handleDisWorker = (event) => {
    setSelectedDisWorker(event.target.value);
    setRadioError1(false);
  };

  const handleHour = (event) => {
    setSelectedHour(event.target.value);
    setRadioError2(false);
  };

  const handleExp = (event) => {
    setSelectedExp(event.target.value);
    setTextError(false);
  };

  const handlePoliceCheck = (event) => {
    setSelectedPoliceCheck(event.target.value);
    setRadioError3(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      selectedCv &&
      selectedFile &&
      selectedDisWorker &&
      selectedHour &&
      selectedExp &&
      selectedPoliceCheck
    ) {
      window.location.href = "/sign3";
    } else {
      if (!selectedCv) {
        setRadioError(true);
      }
      if (!selectedFile) {
        setFileError(true);
      }
      if (!selectedDisWorker) {
        setRadioError1(true);
      }
      if (!selectedHour) {
        setRadioError2(true);
      }
      if (!selectedExp) {
        setTextError(true);
      }
      if (!selectedPoliceCheck) {
        setRadioError3(true);
      }
    }
  };

  const {
    register,
    formState: { errors },
    clearErrors,
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
              marginLeft: 1,
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
              Answer the questions
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
                  color: "#344054",
                  fontWeight: 500,
                  fontFamily: "Onest,sans-serif",
                  "&.Mui-focused": {
                    color: "#344054",
                  },
                }}
              >
                Do you have a CV/Resume to give us?*
              </Typography>

              <FormControl error={fileError}>
                <RadioGroup
                  aria-labeledby="demo-radio-buttons-group-label"
                  name="radio-buttons-group"
                  value={selectedCv}
                  onChange={handleCv}
                >
                  <FormControlLabel
                    value="yes"
                    control={
                      <Radio
                        sx={{
                          "&.Mui-checked": {
                            color: "#FC9155",
                          },
                        }}
                      />
                    }
                    // label="Yes"
                    label={
                      <span style={{ fontFamily: "Onest, sans-serif" }}>
                        Yes
                      </span>
                    }
                    style={{ fontFamily: "Onest, sans-serif" }}
                  />
                  <FormControlLabel
                    value="no"
                    control={
                      <Radio
                        sx={{
                          "&.Mui-checked": {
                            color: "#FC9155",
                          },
                        }}
                      />
                    }
                    label={
                      <span style={{ fontFamily: "Onest, sans-serif" }}>
                        No
                      </span>
                    }
                    style={{ fontFamily: "YourChosenFont, sans-serif" }}
                  />
                </RadioGroup>
              </FormControl>

              {radioError && (
                <Typography variant="body2" color="red">
                  Please select one option.
                </Typography>
              )}

              <Typography
                component="h1"
                variant="h5"
                sx={{
                  marginBottom: "1px",
                  marginTop: "10px",
                  fontSize: "16px",
                  color: "#344054",
                  fontWeight: 500,
                  fontFamily: "Onest,sans-serif",
                }}
              >
                Upload CV
              </Typography>
              <TextField
                margin="normal"
                required
                fullWidth
                id="file"
                name="file"
                autoFocus
                value={selectedFile ? selectedFile.name : ""}
                InputProps={{
                  sx: {
                    borderRadius: "12px",
                  },
                  endAdornment: (
                    <InputAdornment position="end">
                      <Button
                        disableRipple
                        sx={{
                          bgcolor: "white",
                          color: "black",
                          border: "none",
                          "&:hover": { backgroundColor: "transparent" },
                          textTransform: "none",
                          color: "#344054",
                          fontWeight: 500,
                          fontFamily: "Onest,sans-serif",
                          fontSize: "16px",
                        }}
                        component="label"
                        tabIndex={-1}
                      >
                        Upload
                        <input
                          type="file"
                          accept="application/pdf, image/x-png,image/gif,image/jpeg"
                          onChange={handleFileChange}
                          style={{ display: "none" }}
                        />
                      </Button>
                    </InputAdornment>
                  ),
                }}
                sx={{
                  mt: "1px",
                }}
              />
              {fileError && (
                <Typography variant="body2" color="red">
                  Please upload a CV.
                </Typography>
              )}
              <Typography
                component="h1"
                variant="h5"
                sx={{
                  marginBottom: "1px",
                  marginTop: "10px",
                  fontSize: "16px",
                  color: "#344054",
                  fontWeight: 500,
                  fontFamily: "Onest,sans-serif",
                }}
              >
                Have you worked as a disability support worker before?*
              </Typography>
              <FormControl>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                  value={selectedDisWorker}
                  onChange={handleDisWorker}
                >
                  <FormControlLabel
                    value="yes"
                    control={
                      <Radio
                        sx={{
                          "&.Mui-checked": {
                            color: "#FC9155",
                          },
                        }}
                      />
                    }
                    label={
                      <span style={{ fontFamily: "Onest, sans-serif" }}>
                        Yes
                      </span>
                    }
                  />
                  <FormControlLabel
                    value="no"
                    control={
                      <Radio
                        sx={{
                          "&.Mui-checked": {
                            color: "#FC9155",
                          },
                        }}
                      />
                    }
                    label={
                      <span style={{ fontFamily: "Onest, sans-serif" }}>
                        No
                      </span>
                    }
                  />
                </RadioGroup>
              </FormControl>
              {radioError1 && (
                <Typography variant="body2" color="red">
                  Please select one option.
                </Typography>
              )}

              <Typography
                component="h1"
                variant="h5"
                sx={{
                  marginBottom: "1px",
                  marginTop: "10px",
                  fontSize: "16px",
                  color: "#344054",
                  fontWeight: 500,
                  fontFamily: "Onest,sans-serif",
                }}
              >
                How many hours a week would you like to work?
              </Typography>
              <FormControl>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                  value={selectedHour}
                  onChange={handleHour}
                >
                  <FormControlLabel
                    value="r1"
                    control={
                      <Radio
                        sx={{
                          "&.Mui-checked": {
                            color: "#FC9155",
                          },
                        }}
                      />
                    }
                    label={
                      <span style={{ fontFamily: "Onest, sans-serif" }}>
                        1-10 hours
                      </span>
                    }
                  />
                  <FormControlLabel
                    value="r2"
                    control={
                      <Radio
                        sx={{
                          "&.Mui-checked": {
                            color: "#FC9155",
                          },
                        }}
                      />
                    }
                    label={
                      <span style={{ fontFamily: "Onest, sans-serif" }}>
                        11-25 hours
                      </span>
                    }
                  />
                  <FormControlLabel
                    value="r3"
                    control={
                      <Radio
                        sx={{
                          "&.Mui-checked": {
                            color: "#FC9155",
                          },
                        }}
                      />
                    }
                    label={
                      <span style={{ fontFamily: "Onest, sans-serif" }}>
                        26-35 hours
                      </span>
                    }
                  />
                  <FormControlLabel
                    value="r4"
                    control={
                      <Radio
                        sx={{
                          "&.Mui-checked": {
                            color: "#FC9155",
                          },
                        }}
                      />
                    }
                    label={
                      <span style={{ fontFamily: "Onest, sans-serif" }}>
                        more than 36 hourses
                      </span>
                    }
                  />
                </RadioGroup>
              </FormControl>
              {radioError2 && (
                <Typography variant="body2" color="red">
                  Please select one option.
                </Typography>
              )}
              <Typography
                component="h1"
                variant="h5"
                sx={{
                  marginBottom: "1px",
                  marginTop: "10px",
                  fontSize: "16px",
                  color: "#344054",
                  fontWeight: 500,
                  fontFamily: "Onest,sans-serif",
                }}
              >
                What is your experience?
              </Typography>
              <TextField
                margin="normal"
                required
                fullWidth
                name="exp"
                placeholder="Enter your experience"
                autoComplete
                sx={{
                  mt: "1px",
                }}
                InputProps={{
                  sx: {
                    borderRadius: "12px",
                    fontFamily: "Onest,sans-serif",
                  },
                }}
                value={selectedExp}
                onChange={handleExp}
              />
              {textError && (
                <Typography variant="body2" color="red">
                  Please enter your experience.
                </Typography>
              )}
              <Typography
                component="h1"
                variant="h5"
                sx={{
                  marginBottom: "1px",
                  marginTop: "10px",
                  fontSize: "16px",
                  color: "#344054",
                  fontWeight: 500,
                  fontFamily: "Onest,sans-serif",
                }}
              >
                Do you have police check done?*
              </Typography>
              <FormControl>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                  value={selectedPoliceCheck}
                  onChange={handlePoliceCheck}
                >
                  <FormControlLabel
                    value="yes"
                    control={
                      <Radio
                        sx={{
                          "&.Mui-checked": {
                            color: "#FC9155",
                          },
                        }}
                      />
                    }
                    label={
                      <span style={{ fontFamily: "Onest, sans-serif" }}>
                        Yes
                      </span>
                    }
                  />
                  <FormControlLabel
                    value="no"
                    control={
                      <Radio
                        sx={{
                          "&.Mui-checked": {
                            color: "#FC9155",
                          },
                        }}
                      />
                    }
                    label={
                      <span style={{ fontFamily: "Onest, sans-serif" }}>
                        No
                      </span>
                    }
                  />
                </RadioGroup>
              </FormControl>
              {radioError3 && (
                <Typography variant="body2" color="red">
                  Please select one option.
                </Typography>
              )}
              <Stack
                spacing={2}
                direction="row"
                marginBottom={10}
                marginTop={2}
              >
                <Button
                  variant="outlined"
                  sx={{
                    px: "70px",
                    color: "#024FAA",
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
                  Back
                </Button>
                <Button
                  type="submit"
                  onClick={handleSubmit}
                  variant="contained"
                  sx={{
                    px: "70px",
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
              </Stack>

              <Grid item align="center">
                <Link href="/sign2" variant="body2"></Link>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
}
