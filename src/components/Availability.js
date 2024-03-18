import React from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import AccessTime from "@mui/icons-material/AccessTime";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import List from "@mui/material/List";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
// import backg from "../Assets/caredac.jpg";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";



function Guidelines3() {
  const navigate = useNavigate();


  const [open, setOpen] = React.useState(false);
  const [close, setClose] = React.useState(false);
  const [selectedArea, setSelectedArea] = React.useState("");
  const [areaError, setAreaError] = React.useState(false);

  const [startDate, setStartDate] = useState("");
  const [error1, setError1] = React.useState(false);
  const [endDate, setEndDate] = useState("");
  const [error2, setError2] = React.useState(false);

  const handleStartChange = (event) => {
    const start = event.target.value;
    setStartDate(start);
    setError1(false);
  };

  const handleEndChange = (event) => {
    const end = event.target.value;
    setEndDate(end);
    setError2(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (selectedArea && startDate && endDate) {
      navigate("/logs");
    } else {
      if (!selectedArea) {
        setAreaError(true);
      }
      if (!startDate) {
        setError1(true);
      } else {
        // Date is not empty, handle the date
        console.log("Date submitted:", startDate);
        // You can clear the error here if needed
        setError1(false);
      }
      if (!endDate) {
        setError2(true);
      } else {
        // Date is not empty, handle the date
        console.log("Date submitted:", endDate);
        // You can clear the error here if needed
        setError2(false);
      }
    }
  };

  const handleClick = () => {
    setOpen(!open);
    setClose(false);
  };

  const handleAreaClick = (area) => {
    setSelectedArea(area);
    setAreaError(false);
    setOpen(!open);
  };
  const clickHandler = () => {
    // console.log("click kiya hai")
    navigate("/Profile");
  };

  const {
    register,
    formState: { errors },
  } = useForm({});

  return (
    <div
      style={{
        // backgroundImage: url(${backg}),
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        minHeight: "100vh", // Ensure the container fills the entire viewport height
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container
        sx={{
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "500px",
        }}
      >
        <Grid>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              paddingTop: "25px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ArrowBackIosIcon onClick={clickHandler}></ArrowBackIosIcon>
              <Typography
                sx={{
                  fontSize: "25px",
                  fontFamily: "Onest",
                  fontWeight: "600",
                  paddingLeft: "5px",
                }}
              >
                Availability
              </Typography>
            </Box>
            <AccessTime
              sx={{
                color: "#FC9155",
                border: "1px solid #47476614",
                padding: "4px",
                borderRadius: "8px",
                height: "30px",
                width: "30px",
              }}
            ></AccessTime>
          </Box>
        </Grid>

        <Card
          sx={{
            // width:"343px",
            height: "80px",
            margin: "30px 0px",
            top: "136px",
            left: "16px",
            padding: "16px",
            borderRadius: "8px",
            border: "1px",
            gap: "16px",
            boxShadow: "2px 2px #0000000D",
            border: "1px solid #F2F4F7",
            borderRadius: "8px",
          }}
        >
          <Typography
            sx={{ fontSize: "20px", fontFamily: "Onest", fontWeight: "500" }}
          >
            {" "}
            My Availability
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", marginTop: "5px" }}>
            <AccessTime
              sx={{
                color: "#FC9155",
                width: "35px",
                height: "35px",
                top: "10px",
                left: "10px",
                border: "1px solid #47476614",
                padding: "5px",
                borderRadius: "10px",
              }}
            ></AccessTime>
            <Box sx={{ paddingLeft: "10px" }}>
              <Typography
                sx={{
                  fontSize: "18px",
                  color: "#63BA44",
                  fontFamily: "Onest",
                  fontWeight: "600",
                }}
              >
                Available
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  color: "#85859F",
                  fontFamily: "Montserrat",
                  fontWeight: "500",
                }}
              >
                Till 26th January
              </Typography>
            </Box>
          </Box>
        </Card>

        <Card
          sx={{
            margin: "30px 0px",
            boxShadow: "2px 2px #0000000D",
            border: "1px solid #F2F4F7",
            borderRadius: "8px",
          }}
        >
          <Typography
            sx={{
              fontSize: "20px",
              padding: "16px 0px 5px 16px",
              fontFamily: "Onest",
              fontWeight: "600",
            }}
          >
            Change Availability
          </Typography>
          <Box>
            <Box
              sx={{
                display: "flex",
                margin: "15px",
                justifyContent: "space-between",
              }}
            >
              <Box>
                <Typography
                  sx={{
                    fontFamily: "Onest",
                    fontWeight: "500",
                    color: "#344054",
                  }}
                >
                  Start Date
                </Typography>
                <TextField
                  type="date"
                  id="startDate"
                  value={startDate}
                  onChange={handleStartChange}
                ></TextField>

                {error1 && (
                  <Typography variant="body2" color="error">
                    Please select Start Date.
                  </Typography>
                )}
              </Box>
              <Box sx={{ paddingLeft: "15px" }}>
                <Typography
                  sx={{
                    fontFamily: "Onest",
                    fontWeight: "500",
                    color: "#344054",
                  }}
                >
                  End Date
                </Typography>
                <TextField
                  type="date"
                  id="endDate"
                  value={endDate}
                  onChange={handleEndChange}
                  placeholder="End Date"
                ></TextField>

                {error2 && (
                  <Typography variant="body2" color="error">
                    Please select End Date.
                  </Typography>
                )}
              </Box>
            </Box>
            <Box sx={{ margin: "15px" }}>
              <Typography
                sx={{
                  fontFamily: "Onest",
                  fontWeight: "500",
                  color: "#344054",
                }}
              >
                Status
              </Typography>
              <List
                sx={{
                  width: "100%",
                  maxWidth: 500,
                  bgcolor: "background.paper",
                  border: "1px",
                }}
                component="nav"
                aria-labelledby="nested-list-subheader"
              >
                <ListItemButton
                  onClick={handleClick}
                  sx={{
                    fontFamily: "Onest",
                    border: "1px solid grey",
                    borderRadius: "12px",
                  }}
                >
                  <ListItemText primary={selectedArea || "Select Status"} />
                  {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItemButton
                      onClick={() => handleAreaClick("Available")}
                    >
                      <ListItemText primary="Available" />
                    </ListItemButton>
                    <ListItemButton
                      onClick={() => handleAreaClick("Not Available")}
                    >
                      <ListItemText primary="Not Available" />
                    </ListItemButton>
                  </List>
                </Collapse>
              </List>
              {areaError && (
                <Typography variant="body2" color="error">
                  Please select Status.
                </Typography>
              )}
              <Button
                type="submit"
                onClick={handleSubmit}
                variant="contained"
                sx={{
                  width: "100%",
                  height: "56px",
                  marginTop: "30px",
                  // padding: "10px, 18px, 10px, 18px",
                  borderRadius: "40px",
                  bgcolor: "white",
                  gap: "8px",
                  color: "#024FAA",
                  border: "1px solid #024FAA",
                  boxShadow: "2px 2px #0000000D",
                  "&:hover": {
                    color: "white",
                    bgcolor: "024FAA",
                  },
                }}
              >
                Submit
              </Button>
            </Box>
          </Box>
        </Card>
      </Container>
    </div>
  );
}

export default Guidelines3;
