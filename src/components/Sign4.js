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

export default function Sign4() {
  const [selectedServices, setSelectedServices] = React.useState([]);
  const [error, setError] = React.useState("");

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedServices((prevSelected) => [...prevSelected, value]);
      setError("");
    } else {
      setSelectedServices((prevSelected) =>
        prevSelected.filter((item) => item !== value)
      );
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedServices.length === 0) {
      setError("Please select at least one service.");

      return;
    }
    window.location.href = "/sign5";
  };

  const {
    formState: { errors },
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
              display: "flex",
              flexDirection: "column",
              alignItems: "left",
            }}
          >
            <Typography
              component="h1"
              variant="h4"
              fontWeight={600}
              sx={{ fontFamily: "Onest, sans-serif" }}
            >
              Service I Offer
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
              Select services
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
                      value="Personal care"
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
                      Personal care
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
                      value="Domestic Assistance"
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
                      Domestic Assistance
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
                      value="Social support & community participation"
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
                      Social support & community participation
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
                      value="Specialist Care"
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
                      Specialist Care
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
                      value="Out and About Transport"
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
                      Out and About Transport
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
                      value="Relief Respite Care"
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
                      Relief Respite Care
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
                      value="Coaching & Counselling"
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
                      Coaching & Counselling
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
                      value="Disability Products"
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
                      Disability Products
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
                <Link href="/sign4" variant="body2"></Link>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
}
