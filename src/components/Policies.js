import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import EditProfile from "./EditProfile";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";

export default function Policies() {
  const [isEditOpen, setIsEditOpen] = React.useState(false);

  const handleEditClick = () => {
    setIsEditOpen(!isEditOpen);
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
          <IconButton onClick={handleEditClick} component={Link} to="/Profile" sx={{"&:hover": { bgcolor: "white", color: "black" }}}>
            <ArrowBackIosIcon sx={{color:"#101828"}} />
          </IconButton>
          Company Policies
        </Typography>
      </Box>
    </div>
  );
}
