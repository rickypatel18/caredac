import React from "react";
import AccessTime from "@mui/icons-material/AccessTime";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Box, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";

function Guidelines4() {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate("/availability");
  };

  const cardData = [
    { type: "Not available", date: "Oct 10 - Oct 17, 2024", duration: "2Day" },
    { type: "Available", date: "Nov 01 - Nov 17, 2024", duration: "1Day" },
    { type: "Not available", date: "Oct 10 - Oct 17, 2024", duration: "2Day" },
    { type: "Available", date: "Oct 17 - Oct 19, 2024", duration: "9Day" },
    { type: "Not available", date: "Nov 01 - Nov 17, 2024", duration: "1Day" },
    { type: "Available", date: "Feb 10 - Feb 13, 2025", duration: "3Day" },
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
      <Container
        sx={{
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          width: "500px",
          bgcolor: "honeydew",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "left",
            paddingTop: "25px",
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
            Logs
          </Typography>
        </Box>

        {cardData.map((data, index) => (
          <Card
            key={index}
            sx={{
              height: "60px",
              margin: "30px 0px",
              padding: "16px",
              borderRadius: "8px",
              border: "1px solid #F2F4F7",
              boxShadow: "2px 2px #0000000D",
              alignItems: "center",
              bgcolor:"snow "
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box sx={{ paddingLeft: "10px" }}>
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontFamily: "Onest",
                    fontWeight: "500",
                  }}
                >
                  {data.type}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    color: "#85859F",
                    fontFamily: "Onest",
                    fontWeight: "400",
                    marginTop: "5px",
                  }}
                >
                  {data.date}
                </Typography>
                
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  border: "1px solid #47476614",
                  borderRadius: "10px",
                  width: "60px",
                  alignItems: "center",
                  boxShadow: "2px 2px #0000000D",
                }}
              >
                <AccessTime
                  sx={{
                    color: "#292D32",
                    width: "25px",
                    height: "25px",
                    top: "10px",
                    left: "10px",
                    padding: "5px",
                  }}
                ></AccessTime>
                <Typography
                  sx={{
                    fontSize: "12px",
                    color: "#475467",
                    fontFamily: "Onest",
                    fontWeight: "600",
                  }}
                >
                  {data.duration}
                </Typography>
              </Box>
            </Box>
          </Card>
        ))}
      </Container>
    </div>
  );
}

export default Guidelines4;
