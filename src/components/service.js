import * as React from "react";
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
import { Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

const defaultTheme = createTheme();

export default function Services() {
  const navigate = useNavigate();

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
    navigate("/Profile");
  };

  const handleDelete = () => {
    navigate("/Profile");
  };

  // Array of topics
  const topics = [
    "Personal care",
    "Domestic Assistance",
    "Social support & community participation",
    "Specialist Care",
    "Out and About Transport",
    "Relief Respite Care",
    "Coaching & Counselling",
    "Disability Products",
  ];

  return (
    <div
      style={{
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

            <Divider orientation="horizontal" flexItem />
           
              <FormGroup
              onSubmit={handleSubmit}
              >
                {/* Mapping over topics array and rendering checkboxes */}
                {topics.map((topic, index) => (
                  <FormControlLabel
                    key={index}
                    control={
                      <Checkbox
                        sx={{
                          "&.Mui-checked": {
                            color: "#FC9155",
                          },
                        }}
                        onChange={handleCheckboxChange}
                        value={topic}
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
                        {topic}
                      </span>
                    }
                  />
                  
                ))}
              </FormGroup>
              {error && (
                <Typography variant="body2" color="red">
                  {error}
                </Typography>
              //    <small style={{color:"red"}} >
              //    {error}
              //  </small>
              )}

              <Stack
                spacing={4}
                direction="row"
                marginBottom={10}
                marginTop={2}
                sx={{ justifyContent: "center" }}
              >
                <Button
                  variant="outlined"
                  onClick={handleDelete}
                  sx={{
                    px: "70px",
                    padding: "10px, 18px, 10px, 18px",
                    height: "44px",
                    borderRadius: "40px",
                    gap: "8px",
                  }}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  onClick={handleSubmit}
                  variant="contained"
                  sx={{
                    px: "70px",
                    padding: "10px, 18px, 10px, 18px",
                    height: "44px",
                    borderRadius: "40px",
                    gap: "8px",
                    bgcolor: "#024FAA",
                  }}
                >
                  Save
                </Button>
              </Stack>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
}
