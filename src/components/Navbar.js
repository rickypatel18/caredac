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
import { Grid } from "@mui/material";
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

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [age, setAge] = React.useState("");
  const [value, setValue] = React.useState(0);

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
    <AppBar position="static" color="default" sx={{ backgroundColor: "white" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
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
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item>
              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                >
                  <MenuIcon sx={{ color: "black" }} />{" "}
                  {/* Set the color of the icon to black */}
                </IconButton>
              </Box>

              <Box>
                <Grid container>
                  <Grid>
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
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            <Grid item>
              <Box sx={{ flexGrow: 0 }}>
                <Grid container spacing={2}>
                  <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                  >
                    <BottomNavigationAction label="Home" icon={<HomeIcon />} />

                    <BottomNavigationAction
                      label="Shifts"
                      icon={<EventNoteIcon />}
                    />

                    <BottomNavigationAction
                      label="Earnings"
                      icon={<WalletIcon />}
                    />

                    <BottomNavigationAction
                      label="Profile"
                      icon={<PersonIcon />}
                    />

                    <BottomNavigationAction icon={<ChatIcon />} />
                  </BottomNavigation>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
