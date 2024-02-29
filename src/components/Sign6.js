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
import { Dialog, DialogTitle } from "@mui/material";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { useForm } from "react-hook-form";

const defaultTheme = createTheme();

export default function Sign6() {
  const [selectedDegree, setSelectedDegree] = React.useState([]);
  const [error, setError] = React.useState("");

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedDegree((prevSelected) => [...prevSelected, value]);
      setError("");
    } else {
      setSelectedDegree((prevSelected) =>
        prevSelected.filter((item) => item !== value)
      );
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedDegree.length === 0) {
      setError("Please select at least one Qualification.");
      return;
    }
    setOpen(true);
  };

  const {
    formState: { errors },
  } = useForm({});

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
              I have following qualification
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
              Select from the qualifications
            </Typography>

            <Divider orientation="horizontal" flexItem />
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 3 }}
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
                      value="Degree of Nursing"
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
                      Degree of Nursing
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
                      value="Degree on social work"
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
                      Degree on social work
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
                      value="Diploma of Nursing"
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
                      Diploma of Nursing
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
                      value="Degree on social work"
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
                      Degree on social work
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
                      value="Diploma of Nursing"
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
                      Diploma of Nursing
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
                      value="Diploma of Nursing"
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
                      Diploma of Nursing
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
                      value="Diploma of Nursing"
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
                      Diploma of Nursing
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
                      value="Diploma of Nursing"
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
                      Diploma of Nursing
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
                onClick={handleSubmit}
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
                width: "320px",
                height: "100%",
                borderRadius: "20px",
                border: "1px solid white",
              }}
            >
              <Box
                sx={{
                  bgcolor: "#F2F4F7",
                  width: "100%",
                  height: "100px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <CheckBoxIcon
                  sx={{
                    color: "#32D583",
                    fontSize: 60,
                  }}
                />
              </Box>
              <DialogTitle
                textAlign="center"
                sx={{ fontFamily: "Onest,sans-serif" }}
              >
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
                      fontSize: "14px",
                      color: "grey",
                      textAlign: "center",
                      // margin:"0px 10px ",
                      padding: "0px 30px",
                      fontFamily: "Onest,sans-serif",
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
                  mt: 3,
                  px: 200,
                  width: "80%",
                  mb: 3,
                  mx: 2,
                  bgcolor: "#024FAA",
                  borderRadius: "40px",
                  border: "1px solid #024FAA ",
                  textTransform: "none",
                  padding: "10px 18px",
                  fontSize: "16px",
                  fontWeight: 600,
                  fontFamily: "Onest,sans-serif",
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
