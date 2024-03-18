import * as React from "react";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { useEffect } from "react";
import EventNoteIcon from "@mui/icons-material/EventNote";
import WalletIcon from "@mui/icons-material/Wallet";
import PersonIcon from "@mui/icons-material/Person";
import ChatIcon from "@mui/icons-material/Chat";
import { Link, useLocation } from "react-router-dom";

function Bnav() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [age, setAge] = React.useState("");
  const location = useLocation();
  const [value, setValue] = React.useState(0);

  useEffect(() => {
    switch (location.pathname) {
      case "/navbar":
        setValue(0);
        break;
      case "/":
        setValue(1);
        break;
      case "/bankdetail":
        setValue(2);
        break;
      case "/profile":
        setValue(3);
        break;
      case "/":
        setValue(4);
        break;
      // Add cases for other routes if needed
      default:
        setValue(0);
    }
  }, [location]);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (

    <container
      sx={{
        margin: "0px",
        padding: "0px",
        boxSizing: "border-box",
        width: "100%",

      }}
    >
      <Box sx={{ Width: "100vw", boxSizing: "border-box", margin: "0px" }}>
        <Grid container sx={{}}>
          <BottomNavigation
            sx={{
              width: "100vw",
              // bgcolor: "red"
            }}
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          >
            <BottomNavigationAction
              label="Home"
              icon={
                <HomeIcon sx={{ color: value === 0 ? "#024FAA" : "black" }} />
              }
              component={Link}
              to="/home"
            />

            <BottomNavigationAction
              label="Shifts"
              icon={
                <EventNoteIcon
                  sx={{ color: value === 1 ? "#024FAA" : "black" }}
                />
              }
            />

            <BottomNavigationAction
              label="Earnings"
              icon={
                <WalletIcon sx={{ color: value === 2 ? "#024FAA" : "black" }} />
              }
              component={Link}
              to="/bankdetail"
            />

            <BottomNavigationAction
              label="Profile"
              icon={
                <PersonIcon sx={{ color: value === 3 ? "#024FAA" : "black" }} />
              }
              component={Link}
              to="/profile"
            />
            <BottomNavigationAction
              label="Chat"
              icon={
                <ChatIcon sx={{ color: value === 4 ? "#024FAA" : "black" }} />
              }
              component={Link}
              to="/chta"
            />
          </BottomNavigation>
        </Grid>
      </Box>
    </container>
  );
}
export default Bnav;