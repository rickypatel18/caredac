import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import * as React from "react";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import AddTaskIcon from '@mui/icons-material/AddTask';
import AddIcon from "@mui/icons-material/Add";

export default function Profile() {
  const [open2, setOpen2] = React.useState(false);
  const [inputValue, setInputValue] = React.useState("");
  const initialNeedsList = ["Bathing", "Walk on morning", "Personal care"];
  const [needsList, setNeedsList] = React.useState(initialNeedsList);
  const [unsavedChanges, setUnsavedChanges] = React.useState(false);

  const handleNeed = () => {
    setOpen2(true);
    setUnsavedChanges(false);
  };

  const handleAddNeed = () => {
    if (inputValue.trim() !== "") {
      setNeedsList([...needsList, inputValue]);
      setInputValue("");
      setUnsavedChanges(true);
    }
  };

  const handleDelete = (indexToRemove) => {
    setNeedsList(needsList.filter((_, index) => index !== indexToRemove));
    setUnsavedChanges(true);
  };

  const handleSaveChanges = () => {
    // Logic to save changes goes here
    setOpen2(false);
    setUnsavedChanges(false);
  };

  const handleClose = () => {
    if (unsavedChanges) {
      // If there are unsaved changes, reset to initial state
      setNeedsList(initialNeedsList);
      setUnsavedChanges(false);
    } else {
      // Otherwise, just close the dialog
      setOpen2(false);
    }
  };

  return (
    <Box
      component="main"
      maxWidth="xl"
      style={{
        padding: "0px",
        height: "100%",
        width: "100%",
        boxSizing: "border-box",
        flexGrow: 1,
        overflowY: "auto",
        overflowX: "hidden",
        bgcolor: "red",
      }}
    >
      <Grid
        container
        item
        xs={18}
        spacing={2}
        sx={{
          width: "100%",
        }}
      >
        <Grid
          sx={{ borderBottom: "1px solid #D0D5DD", margin: "0px 20px" }}
          item
          xs={18}
        >
          <Box
            onClick={handleNeed}
            sx={{
              display: "flex",
              alignItems: "center",
              padding: "2px",
              width: "300px",
              cursor: "pointer",
              color: "#344054",
            }}
          >
            <AddTaskIcon
              sx={{ padding: "3px 0px 2px 0px" }}
            ></AddTaskIcon>
            <Typography sx={{ margin: "0px 15px" }}>Needs</Typography>
            <KeyboardArrowRightIcon
              sx={{ padding: "3px 0px 2px 0px" }}
            ></KeyboardArrowRightIcon>
          </Box>
        </Grid>

        <Dialog open={open2} sx={{ width: "100%", minWidth: "300px", maxHeight:"600px" }}>
          <Box sx={{ border: "1px", borderRadius: "12px", width: "500px" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                padding: "10px",
                height: "50px",
                marginTop: "15px",
                borderBottom: "1px solid #EAECF0",
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "600",
                  fontSize: "36px",
                  marginLeft: "10px",
                }}
              >
                Special needs
              </Typography>
            </Box>

            <Box
              sx={{
                padding: "12px 18px",
                margin: "15px 12px ",
              }}
            >
              <Box>
                <ul>
                  {needsList.map((need, index) => (
                    <li key={index}>
                      <Typography
                        sx={{
                          fontFamily: "Onest",
                          fontSize: "16px",
                          fontWeight: "500",
                          margin: "5px",
                          justifyContent: "space-between",
                          display: "flex",
                          alignItems: "center",
                          wordBreak:"break-all"
                        }}
                      >
                        {need}
                        <DeleteOutlineIcon
                          sx={{ marginLeft: "10px", cursor: "pointer" }}
                          onClick={() => handleDelete(index)}
                        ></DeleteOutlineIcon>
                      </Typography>
                    </li>
                  ))}
                </ul>
              </Box>

              <Divider
                orientation="horizontal"
                flexItem
                sx={{ margin: "15px 0px 18px 0px" }}
              />

              <Box
                sx={{
                  margin: "15px 10px ",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Box sx={{ width: "85%" }}>
                    <Typography>Add Needs</Typography>
                    <TextField
                      required
                      placeholder="Enter Needs"
                      fullWidth
                      id="fname"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      sx={{
                        mt: "5px",
                        color: "#667085",
                      }}
                      InputProps={{
                        sx: {
                          height: "40px",
                          fontWeight: "400",
                          fontSize: "16px",
                          padding: "0px",
                          borderRadius: "12px",
                          fontFamily: "Onest",
                        },
                      }}
                    />
                  </Box>
                  <Box
                    sx={{
                      height: "44px",
                      width: "44px",
                      display: "flex",
                      marginTop: "25px",
                      justifyContent: "center",
                      alignItems: "center",
                      bgcolor: "white",
                      boxShadow:"2px 2px 15px 0px rgba(0.05, 0.05, 0.05, 0.05)",
                      borderRadius: "8px",
                      marginLeft: "20px",
                      cursor: "pointer",
                    }}
                    onClick={handleAddNeed}
                  >
                    <AddIcon ></AddIcon>
                  </Box>
                </Box>

                <Stack
                  spacing={2}
                  direction="row"
                  sx={{
                    justifyContent: "space-between",
                    marginTop: "20px",
                  }}
                >
                  <Button
                    variant="outlined"
                    onClick={handleClose}
                    sx={{
                      px: "70px",
                      padding: "10px, 18px, 10px, 18px",
                      height: "44px",
                      borderRadius: "40px",
                      bgcolor: "white",
                      color: "#024FAA",
                      textTransform: "none",
                      border: "1px solid #024FAA",
                    }}
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    onClick={handleSaveChanges}
                    variant="contained"
                    sx={{
                      px: "70px",
                      padding: "10px, 18px, 10px, 18px",
                      height: "44px",
                      borderRadius: "40px",
                      bgcolor: "#024FAA",
                      color: "white",
                      textTransform: "none",
                      border: "1px solid #024FAA",
                    }}
                  >
                    Save
                  </Button>
                </Stack>
              </Box>
            </Box>
          </Box>
        </Dialog>
      </Grid>
    </Box>
  );
}
