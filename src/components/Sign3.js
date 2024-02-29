import * as React from "react";
import backg from "../Assets/caredac.jpg";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import FormGroup from "@mui/material/FormGroup";
import FormControl from "@mui/material/FormControl";
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
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

const defaultTheme = createTheme();

export default function Sign3() {
  const [open, setOpen] = React.useState(false);
  const [close, setClose] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const [close1, setClose1] = React.useState(false);
  const [selectedArea, setSelectedArea] = React.useState("");
  const [selectedArea1, setSelectedArea1] = React.useState("");
  const [areaError, setAreaError] = React.useState(false);
  const [areaError1, setAreaError1] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
    setClose(false);
  };

  const handleClick1 = () => {
    setOpen1(!open1);
    setClose1(false);
  };

  const handleAreaClick = (area) => {
    setSelectedArea(area);
    setAreaError(false);
    setOpen(!open);
  };

  const handleAreaClick1 = (area) => {
    setSelectedArea1(area);
    setAreaError1(false);
    setOpen1(!open1);
  };

  const [selectedWCC, setSelectedWCC] = React.useState("");
  const [selectedNDIS, setSelectedNDIS] = React.useState("");
  const [selectedFirstAid, setSelectedFirstAid] = React.useState("");
  const [radioError1, setRadioError1] = React.useState(false);
  const [radioError2, setRadioError2] = React.useState(false);
  const [radioError3, setRadioError3] = React.useState(false);

  const handleWCCChange = (event) => {
    setSelectedWCC(event.target.value);
    setRadioError1(false);
  };

  const handleNDISChange = (event) => {
    setSelectedNDIS(event.target.value);
    setRadioError2(false);
  };

  const handleFirstAidChange = (event) => {
    setSelectedFirstAid(event.target.value);
    setRadioError3(false);
  };

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
    let hasError = false;

    // Check if any validation fails
    if (!selectedArea) {
      setAreaError(true);
      hasError = true;
    }
    if (!selectedArea1) {
      setAreaError1(true);
      hasError = true;
    }
    if (!selectedWCC) {
      setRadioError1(true);
      hasError = true;
    }
    if (!selectedNDIS) {
      setRadioError2(true);
      hasError = true;
    }
    if (!selectedFirstAid) {
      setRadioError3(true);
      hasError = true;
    }
    if (selectedServices.length === 0) {
      setError("Please select at least one service.");
      hasError = true;
    }
    // If there are no errors, redirect to the next page
    if (!hasError) {
      window.location.href = "/sign4";
    }
  };

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
              marginBottom={"16px"}
              sx={{ fontFamily: "Onest,sans-serif" }}
            >
              Additional info
            </Typography>

            <Divider orientation="horizontal" flexItem />
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 2 }}
            >
              <Typography
                component="h1"
                variant="h5"
                sx={{
                  marginBottom: "1px",
                  marginTop: "10px",
                  fontSize: "16px",
                  color: "#344054",
                  fontWeight: "500",
                  fontFamily: "Onest,sans-serif",
                }}
              >
                I have the following qualification(s):
              </Typography>
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
                  required
                  control={
                    <Checkbox
                      sx={{
                        "&.Mui-checked": {
                          color: "#FC9155",
                        },
                      }}
                      onChange={handleCheckboxChange}
                      value="Degree on social work/mental health"
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
                      Degree on social work/mental health
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
                      value="Diploma in disability"
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
                      Diploma in disability
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
                      value="Certificate IV in nursing"
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
                      Certificate IV in nursing
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
                      value="Certificate IV in disability"
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
                      Certificate IV in disability
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
                      value="Certificate III in disability"
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
                      Certificate III in disability
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
                      value="Certificate III in individual support(aged care and disability)"
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
                      Certificate III in individual support(aged care and
                      disability)
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
                      value="Other"
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
                      Other
                    </span>
                  }
                />
              </FormGroup>
              {error && (
                <Typography variant="body2" color="red">
                  {error}
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
                  fontWeight: "500",
                  fontFamily: "Onest,sans-serif",
                }}
              >
                Do you have a valid working with childrens check(wcc)?
              </Typography>
              <FormControl>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                  value={selectedWCC}
                  onChange={handleWCCChange}
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
                      <span
                        style={{
                          color: "#344054",
                          fontWeight: "500",
                          fontFamily: "Onest,sans-serif",
                        }}
                      >
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
                      <span
                        style={{
                          color: "#344054",
                          fontWeight: "500",
                          fontFamily: "Onest,sans-serif",
                        }}
                      >
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
                  fontWeight: "500",
                  fontFamily: "Onest,sans-serif",
                }}
              >
                Do you have a NDIS worker screening check done?
              </Typography>
              <FormControl>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                  value={selectedNDIS}
                  onChange={handleNDISChange}
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
                      <span
                        style={{
                          color: "#344054",
                          fontWeight: "500",
                          fontFamily: "Onest,sans-serif",
                        }}
                      >
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
                      <span
                        style={{
                          color: "#344054",
                          fontWeight: "500",
                          fontFamily: "Onest,sans-serif",
                        }}
                      >
                        No
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
                  fontWeight: "500",
                  fontFamily: "Onest,sans-serif",
                }}
              >
                Do you have Dirst AID training done?
              </Typography>
              <FormControl>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                  value={selectedFirstAid}
                  onChange={handleFirstAidChange}
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
                      <span
                        style={{
                          color: "#344054",
                          fontWeight: "500",
                          fontFamily: "Onest,sans-serif",
                        }}
                      >
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
                      <span
                        style={{
                          color: "#344054",
                          fontWeight: "500",
                          fontFamily: "Onest,sans-serif",
                        }}
                      >
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
              <Typography
                component="h1"
                variant="h5"
                sx={{
                  marginBottom: "1px",
                  marginTop: "10px",
                  fontSize: "16px",
                  color: "#344054",
                  fontWeight: "500",
                  fontFamily: "Onest,sans-serif",
                }}
              >
                Disability support worker role:
              </Typography>
              <List
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  bgcolor: "background.paper",
                  border: "1px",
                }}
                component="nav"
                aria-labelledby="nested-list-subheader"
              >
                <ListItemButton onClick={handleClick}>
                  <ListItemText
                    primary={
                      <span
                        style={{
                          color: "#344054",
                          fontWeight: "500",
                          fontFamily: "Onest,sans-serif",
                        }}
                      >
                        {selectedArea || "Select an Job Role"}
                      </span>
                    }
                  />
                  {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItemButton onClick={() => handleAreaClick("PartTime")}>
                      <ListItemText
                        primary={
                          <span
                            style={{
                              color: "#344054",
                              fontWeight: "500",
                              fontFamily: "Onest,sans-serif",
                            }}
                          >
                            Part time
                          </span>
                        }
                      />
                    </ListItemButton>
                    <ListItemButton
                      onClick={() => handleAreaClick("Full Time")}
                    >
                      <ListItemText
                        primary={
                          <span
                            style={{
                              color: "#344054",
                              fontWeight: "500",
                              fontFamily: "Onest,sans-serif",
                            }}
                          >
                            Full time
                          </span>
                        }
                      />
                    </ListItemButton>
                    <ListItemButton
                      onClick={() => handleAreaClick("Work from Home")}
                    >
                      <ListItemText
                        primary={
                          <span
                            style={{
                              color: "#344054",
                              fontWeight: "500",
                              fontFamily: "Onest,sans-serif",
                            }}
                          >
                            Work from home
                          </span>
                        }
                      />
                    </ListItemButton>
                  </List>
                </Collapse>
              </List>

              {areaError && (
                <Typography variant="body2" color="red">
                  Please select role.
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
                  fontWeight: "500",
                  fontFamily: "Onest,sans-serif",
                }}
              >
                Preferred work area
              </Typography>
              <List
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  bgcolor: "background.paper",
                }}
                component="nav"
                aria-labelledby="nested-list-subheader"
              >
                <ListItemButton onClick={handleClick1}>
                  <ListItemText
                    primary={
                      <span
                        style={{
                          color: "#344054",
                          fontWeight: "500",
                          fontFamily: "Onest,sans-serif",
                        }}
                      >
                        {selectedArea1 || "Select an Area"}
                      </span>
                    }
                  />
                  {open1 ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>

                <Collapse in={open1} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItemButton
                      onClick={() => handleAreaClick1("Ahmedabad")}
                    >
                      <ListItemText
                        primary={
                          <span
                            style={{
                              color: "#344054",
                              fontWeight: "500",
                              fontFamily: "Onest,sans-serif",
                            }}
                          >
                            Vadodara
                          </span>
                        }
                      />
                    </ListItemButton>
                    <ListItemButton onClick={() => handleAreaClick1("Baroda")}>
                      <ListItemText
                        primary={
                          <span
                            style={{
                              color: "#344054",
                              fontWeight: "500",
                              fontFamily: "Onest,sans-serif",
                            }}
                          >
                            Ahmedabad
                          </span>
                        }
                      />
                    </ListItemButton>
                    <ListItemButton
                      onClick={() => handleAreaClick1("Gandhinagar")}
                    >
                      <ListItemText
                        primary={
                          <span
                            style={{
                              color: "#344054",
                              fontWeight: "500",
                              fontFamily: "Onest,sans-serif",
                            }}
                          >
                            Gandhinagar
                          </span>
                        }
                      />
                    </ListItemButton>
                  </List>
                </Collapse>
              </List>

              {areaError1 && (
                <Typography variant="body2" color="red">
                  Please select preferred work area.
                </Typography>
              )}

              <Stack spacing={2} direction="row" marginBottom={10}>
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
                  Submit
                </Button>
              </Stack>

              <Grid item align="center">
                <Link href="/sign3" variant="body2"></Link>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
}
