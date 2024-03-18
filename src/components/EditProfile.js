import React, { useRef } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";

export default function EditProfile({ onProfilePictureChange }) {
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const imageData = reader.result;
      onProfilePictureChange(imageData);
    };
  };

  return (
    <Box>
      <Box>
        <Typography>Edit Profile</Typography>
        <Avatar alt="Profile" src={localStorage.getItem("uploadedImage")} />
        <input
          ref={fileInputRef}
          type="file"
          style={{ display: "none" }}
          onChange={handleFileChange}
        />
        <button onClick={() => fileInputRef.current.click()}>Upload Profile Picture</button>
        <Link to="/Profile">Cancel</Link>
      </Box>
    </Box>
  );
}
