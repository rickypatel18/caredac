import * as React from "react";
import Box from "@mui/material/Box";
  import Typography from "@mui/material/Typography";
  import IconButton from "@mui/material/IconButton";
  import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
  import { Link, useNavigate } from "react-router-dom";

export default function Guideline() {
  const navigate = useNavigate(); // Get the history object

  const handleEditClick = () => {
    navigate("/Profile"); // Programmatically navigate to profile page
  };

  return (
    <div>
      <Box
        sx={{
          // border: "1px solid green",
          padding: "0px",
          margin: "0px",
          height: "14%",
          width: "100%",
        }}
      >
        <Typography
          component="h1"
          variant="h6"
          fontWeight={600}
          sx={{
            fontFamily: "Onest,sans-serif",
            display: "flex",
            padding: "24px 0px 0px 20px",
            alignItems: "center",
            // width: "100%",
            bgcolor: "#FFFFFF",
            boxShadow: "2px 2px 14px 0px rgba(0, 0, 0, 0.05)",
            borderRadius: "50px",
            margin: "10px 20px 20px 20px",
          }}
        >
           <IconButton
            onClick={handleEditClick}
            sx={{ "&:hover": { bgcolor: "white", color: "black" } }}
          >
            <ArrowBackIosIcon sx={{ color: "#101828" }} />
          </IconButton>
          Company Guidelines
        </Typography>
      </Box>
    </div>
  );
}
