import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Logo } from "../Assets";
import { Grid, createTheme } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import HomeIcon from "@mui/icons-material/Home";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import EventNoteIcon from "@mui/icons-material/EventNote";
import WalletIcon from "@mui/icons-material/Wallet";
import PersonIcon from "@mui/icons-material/Person";
import ChatIcon from "@mui/icons-material/Chat";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [age, setAge] = React.useState("");
  const [value, setValue] = React.useState(0);
  const location = useLocation();

  const navigate = useNavigate();
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

  const handleChatIcon = () => {
    setAnchorElUser(null);
    navigate("/chat");
  };

  const handleMenuItemClick = (path, index) => {
    setValue(index); // Set the selected index to highlight the icon
    handleCloseNavMenu(); // Close the menu when a menu item is clicked
    // Redirect to the specified path
    navigate(path);
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: "#333",
        color: "#fff",
        zIndex: 1000,
      }}
    >
      {/* Your Navbar content */}
      <AppBar
        position="static"
        color="default"
        sx={{ backgroundColor: "white" }}
      >
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Box
                component="img"
                sx={{
                  p: 2,
                  height: 60,
                  width: 150,
                  borderRadius: "20px ",
                }}
                alt="Logo"
                src={Logo}
              />
              <Box>
                <Typography
                  variant="h5"
                  sx={{
                    color: "orange",
                    fontSize: "16px",
                    marginLeft: "10px",
                  }}
                >
                  Your location
                </Typography>

                <FormControl sx={{ minWidth: 120 }}>
                  <NativeSelect defaultValue={10}>
                    <option value={10}>Thane,Mumbai</option>
                    <option value={20}>Delhi</option>
                    <option value={30}>Rajasthan</option>
                  </NativeSelect>
                </FormControl>
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", sm: "block", md: "none" },
                }}
              >
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                >
                  <MenuIcon sx={{ color: "black" }} />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  PaperProps={{
                    style: {
                      marginTop: "40px",
                      width: "200px", // Adjust the width as needed
                    },
                  }}
                >
                  <MenuItem onClick={() => handleMenuItemClick("/home", 0)}>
                    Home
                  </MenuItem>
                  <MenuItem onClick={() => handleMenuItemClick("/shifts", 1)}>
                    Shifts
                  </MenuItem>
                  <MenuItem
                    onClick={() => handleMenuItemClick("/bankdetail", 2)}
                  >
                    Earnings
                  </MenuItem>
                  <MenuItem onClick={() => handleMenuItemClick("/profile", 3)}>
                    Profile
                  </MenuItem>
                  <MenuItem onClick={() => handleMenuItemClick("/chat", 4)}>
                    Chat
                  </MenuItem>
                </Menu>
              </Box>

              <Box
                sx={{
                  flexGrow: 0,
                  display: { xs: "none", sm: "none", md: "block" },
                }}
              >
                <Grid container spacing={2}>
                  <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                  >
                    <BottomNavigationAction
                      label="Home"
                      icon={
                        <HomeIcon
                          sx={{ color: value === 0 ? "#024FAA" : "black" }}
                        />
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
                        <WalletIcon
                          sx={{ color: value === 2 ? "#024FAA" : "black" }}
                        />
                      }
                      component={Link}
                      to="/bankdetail"
                    />

                    <BottomNavigationAction
                      label="Profile"
                      icon={
                        <PersonIcon
                          sx={{ color: value === 3 ? "#024FAA" : "black" }}
                        />
                      }
                      component={Link}
                      to="/profile"
                    />
                    <BottomNavigationAction
                      label="Chat"
                      icon={
                        <ChatIcon
                          sx={{ color: value === 4 ? "#024FAA" : "black" }}
                        />
                      }
                      // component={Link}
                      // to="/chat"
                    />
                  </BottomNavigation>
                </Grid>
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </nav>
  );
}

export default Navbar;
