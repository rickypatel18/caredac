import React from "react";
import AccessTime from "@mui/icons-material/AccessTime";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Box, Grid, Stack, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
// import backg from "../Assets/caredac.jpg";
import TextField from "@mui/material/TextField";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import InputAdornment from "@mui/material/InputAdornment";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import Switch from "@mui/material/Switch";
import Button from "@mui/material/Button";
import { Form } from "react-hook-form";
import Avatar from "@mui/material/Avatar";
import Navbar from "./Navbar";
import { useHistroy } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";

function BankDetail() {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate("/Profile");
  };

  // const clickCardDetail = () => {
  //   window.location.href = "/editbank";
  // };
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   window.location.href = "/addbank";
  // };

  return (
    <div
      style={{
        // backgroundImage: `url(${backg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        minHeight: "100vh", // Ensure the container fills the entire viewport height
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container
        component="Form"
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
                My Bank Account Detail
              </Typography>
            </Box>
          </Box>
        </Grid>

        <Container>
          <Box
            sx={{
              height: "80vh",
            }}
          >
            <Card
              sx={{
                // width: "343px",
                height: "60px",
                margin: "30px 0px",
                top: "136px",
                left: "16px",
                padding: "16px",
                borderRadius: "8px",
                border: "1px solid #F2F4F7",
                gap: "16px",
                boxShadow: "2px 2px #0000000D",
                alignItems: "center",
              }}
            >
              <Box
                onClick={clickHandler}
                component={Link}
                to={"/Editbankdetail"}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  textDecoration: "none",
                  color: "#101828",
                }}
              >
                <Box
                  sx={{
                    paddingLeft: "10px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Avatar></Avatar>
                  <Box
                    sx={{
                      marginLeft: "5px",
                    }}
                  >
                    <Typography>Samarth Patel</Typography>
                    <Typography>1234123412341234</Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-around",
                  }}
                >
                  <Button
                    size="10px"
                    sx={{
                      border: "1px solid #024FAA",
                      borderRadius: "40px",
                      color: "#024FAA",
                    }}
                  >
                    primary
                  </Button>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      color: "#667085",
                      fontFamily: "Onest",
                      fontWeight: "600",
                    }}
                  >
                    {" "}
                    12/25
                  </Typography>
                </Box>
              </Box>
            </Card>

            <Card
              sx={{
                // width:"343px",
                height: "60px",
                margin: "30px 0px",
                top: "136px",
                left: "16px",
                padding: "16px",
                borderRadius: "8px",
                border: "1px solid #F2F4F7",
                gap: "16px",
                boxShadow: "2px 2px #0000000D",
                alignItems: "center",
              }}
            >
              <Box
                onClick={clickHandler}
                component={Link}
                to={"/Editbankdetail"}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  textDecoration: "none",
                  color: "#101828",
                }}
              >
                <Box
                  sx={{
                    paddingLeft: "10px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Avatar></Avatar>
                  <Box
                    sx={{
                      marginLeft: "5px",
                    }}
                  >
                    <Typography>Samarth Patel</Typography>
                    <Typography>1234123412341234</Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-around",
                  }}
                >
                  {/* <Button sx={{ border: "1px solid", borderRadius: "40px" }}>
                                primary
                            </Button> */}
                  <Typography
                    sx={{
                      fontSize: "14px",
                      color: "#667085",
                      fontFamily: "Onest",
                      fontWeight: "600",
                    }}
                  >
                    {" "}
                    12/25
                  </Typography>
                </Box>
              </Box>
            </Card>
          </Box>
          <Box>
            <Button
              // type="submit"
              onClick={clickHandler}
              component={Link}
              to="/addbankdetail"
              marginTop={30}
              // onClick={handleSubmit}
              variant="contained"
              sx={{
                width: "100%",
                px: "70px",
                padding: "10px, 18px, 10px, 18px",
                height: "44px",
                borderRadius: "40px",
                gap: "8px",
                bgcolor: "#024FAA",
              }}
            >
              Add New Bank Detail
            </Button>
          </Box>
        </Container>
      </Container>
    </div>
  );
}
export default BankDetail;
