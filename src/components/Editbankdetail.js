import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import { useForm } from "react-hook-form";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate } from "react-router-dom";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import Switch from "@mui/material/Switch";

const defaultTheme = createTheme();

export default function EditBankDetail() {
  const navigate = useNavigate();

  const handleEditClick = () => {
    navigate("/account");
  };

  const [checked, setChecked] = React.useState(false);
  const [errorCheckbox, setErrorCheckbox] = React.useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    // clearErrors,
  } = useForm({});

  const formatCardNumber = (value) => {
    const cleanedValue = value.replace(/\D/g, "");
    let formattedValue = "";
    for (let i = 0; i < cleanedValue.length; i++) {
      if (i > 0 && i % 4 === 0) {
        formattedValue += "-";
      }
      formattedValue += cleanedValue[i];
    }
    return formattedValue;
  };

  // const YourComponent = () => {
  //   const {
  //     register,
  //     handleSubmit,
  //     formState: { errors },
  //   } = useForm();
  // };

  const handleChange = (event) => {
    const isChecked = event.target.checked;
    setChecked(isChecked);
    setErrorCheckbox(false); // Reset error state when checkbox is checked
  };

  const onSubmit = (data) => {
    const formHasErrors = Object.keys(errors).length > 0;
    const allFieldsFulfilled = Object.values(getValues()).every(
      (value) => !!value
    );

    if (!checked) {
      setErrorCheckbox(true);
      return;
    }
    if (formHasErrors || !allFieldsFulfilled) {
      return;
    }
    navigate("/account");
  };

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
        // alignItems: "center",
      }}
    >
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "left",
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
                bgcolor: "#FFFFFF",
                boxShadow: "2px 2px 14px 0px rgba(0, 0, 0, 0.05)",
                borderRadius: "50px",
                margin: "0px 0px 20px 0px", 
              }}
            >
              <IconButton
                onClick={handleEditClick}
                sx={{ "&:hover": { bgcolor: "white", color: "black" } }}
              >
                <ArrowBackIosIcon sx={{ color: "#101828" }} />
              </IconButton>
              Edit payment details
            </Typography>

            <Box sx={{ justifyContent: "space-between" }}>
              <Box
                component="form"
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                sx={{
                  fontFamily: "Onest",
                  justifyContent: "space-between",
                  height: "80vh",
                }}
              >
                <Box
                  component="form"
                  onSubmit={handleSubmit(onSubmit)}
                  noValidate
                  sx={{
                    fontFamily: "Onest",
                    marginBottom: "20%",
                  }}
                >
                  <Typography
                    component="h1"
                    variant="h5"
                    sx={{
                      marginBottom: "10px",
                      marginTop: "5px",
                      fontSize: "16px",
                      color: "#344054",
                      fontWeight: "500",
                      fontFamily: "Onest,sans-serif",
                    }}
                  >
                    Name on card
                  </Typography>
                  <TextField
                    margin="normal"
                    required
                    placeholder="Enter Name"
                    fullWidth
                    id="fname"
                    {...register("fname", {
                      required: " Please enter a name",
                      pattern: {
                        value: /^[A-Za-z\s]+$/,
                        message: "Only alphabetic characters are allowed",
                      },
                    })}
                    sx={{
                      mt: "1px",
                      color: "#667085",
                    }}
                    InputProps={{
                      sx: {
                        borderRadius: "12px",
                        fontFamily: "Onest",
                      },
                      // startAdornment: (
                      //   <InputAdornment position="start">
                      //     <PersonOutlineIcon /> 
                      //   </InputAdornment>
                      // ),
                    }}
                  />
                  <Typography
                    component="h1"
                    variant="h6"
                    color="text.secondary"
                    fontSize={14}
                    sx={{
                      ml: "10px",
                      color: "red",
                    }}
                  >
                    {errors.fname?.message}
                  </Typography>

                  <Typography
                    component="h1"
                    variant="h5"
                    sx={{
                      marginBottom: "10px",
                      marginTop: "5px",
                      fontSize: "16px",
                      color: "#344054",
                      fontWeight: "500",
                      fontFamily: "Onest,sans-serif",
                    }}
                  >
                    Card Number
                  </Typography>
                  <TextField
                    margin="normal"
                    required
                    placeholder="1234-1234-1234-1234"
                    fullWidth
                    type="tel"
                    id="number"
                    {...register("number", {
                      required: "Please enter your card number",
                      pattern: {
                        value: /^\d{4}-\d{4}-\d{4}-\d{4}$/,
                        message: "Invalid card number format",
                      },
                      minLength: {
                        value: 19,
                        message: "Required Length is 16",
                      },
                      maxLength: {
                        value: 19,
                        message: "Required Length is 16",
                      },
                    })}
                    autoFocus
                    sx={{
                      mt: "1px",
                      color: "#667085",
                    }}
                    InputProps={{
                      sx: {
                        borderRadius: "12px",
                        fontFamily: "Onest,sans-serif",
                      },
                      startAdornment: (
                        <InputAdornment position="start">
                          <CreditCardIcon />
                        </InputAdornment>
                      ),
                    }}
                    onChange={(e) => {
                      e.target.value = formatCardNumber(e.target.value);
                    }}
                  />
                  <Typography
                    component="h1"
                    variant="h6"
                    color="text.secondary"
                    fontSize={14}
                    sx={{
                      ml: "10px",
                      color: "red",
                    }}
                  >
                    {errors.number?.message}
                  </Typography>

                  <Typography
                    component="h1"
                    variant="h6"
                    color="text.secondary"
                    fontSize={14}
                    sx={{
                      ml: "10px",
                      color: "red",
                    }}
                  >
                    {errors.confirm?.message}
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        width: "70%",
                        marginRight: "20px",
                      }}
                    >
                      <Typography
                        component="h1"
                        variant="h5"
                        sx={{
                          marginBottom: "10px",
                          marginTop: "5px",
                          fontSize: "16px",
                          color: "#344054",
                          fontWeight: "500",
                          fontFamily: "Onest,sans-serif",
                        }}
                      >
                        Expiry date
                      </Typography>
                      <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="date"
                        {...register("date", {
                          required: "Please select a date",
                        })}
                        type="month"
                        placeholder="MM/YYYY"
                        sx={{
                          mt: "1px",
                          color: "#667085",
                          fontFamily: "Onest",
                        }}
                        InputProps={{
                          sx: {
                            borderRadius: "12px",
                            fontFamily: "Onest",
                          },
                          startAdornment: (
                            <InputAdornment position="start">
                              <CalendarTodayOutlinedIcon />
                            </InputAdornment>
                          ),
                        }}
                      />
                      <Typography
                        component="h1"
                        variant="h6"
                        color="text.secondary"
                        fontSize={14}
                        sx={{
                          ml: "10px",
                          color: "red",
                        }}
                      >
                        {errors.date?.message}
                      </Typography>
                    </Box>

                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        width: "30%",
                      }}
                    >
                      <Typography
                        component="h1"
                        variant="h5"
                        sx={{
                          marginBottom: "10px",
                          marginTop: "5px",
                          fontSize: "16px",
                          color: "#344054",
                          fontWeight: "500",
                          fontFamily: "Onest,sans-serif",
                        }}
                      >
                        CVV
                      </Typography>
                      <TextField
                        margin="normal"
                        required
                        fullWidth
                        {...register("cvv", {
                          required: "Please enter a cvv number",
                          minLength: {
                            value: 3,
                            message: "CVV must be exactly 3 digits",
                          },
                          maxLength: {
                            value: 3,
                            message: "CVV must be exactly 3 digits",
                          },
                          pattern: {
                            value: /^[0-9]{3}$/,
                            message: "CVV must be a 3-digit numeric value",
                          },
                        })}
                        type="password"
                        id="cvv"
                        autoComplete="current-password"
                        placeholder="XXX"
                        sx={{
                          mt: "1px",
                          color: "#667085",
                        }}
                        InputProps={{
                          sx: {
                            borderRadius: "12px",
                            fontFamily: "Onest",
                          },
                        }}
                      />
                      <Typography
                        component="h1"
                        variant="h6"
                        color="text.secondary"
                        fontSize={14}
                        sx={{
                          ml: "10px",
                          color: "red",
                        }}
                      >
                        {errors.cvv?.message}
                      </Typography>
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      borderBottom: "1px solid #D0D5DD",
                      // alignItems:"center",
                      justifyContent: "center",
                      marginBottom: "0px",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "396px",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: "Onest",
                          fontize: "16px",
                          fontWeight: "500",
                          lineHeight: "20px",
                          color: "#344054",
                          width: "90%",
                        }}
                      >
                        Set As Primary Card
                      </Typography>
                      <Typography>
                        <Switch
                          id="check"
                          width="10%"
                          // size="small"
                          checked={checked}
                          onChange={handleChange}
                          padding="2px"
                          inputProps={{ "aria-label": "controlled" }}
                        />
                      </Typography>
                    </Box>

                    {errorCheckbox && (
                      <Typography
                        variant="body2"
                        color="red"
                        sx={{
                          paddingLeft: "10px",
                        }}
                      >
                        Please check the checkbox
                      </Typography>
                    )}
                  </Box>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Button
                    fullWidth
                    onClick={handleEditClick}
                    variant="contained"
                    sx={{
                      width: "180px",
                      mt: 3,
                      mb: 2,
                      textTransform: "none",
                      fontSize: "16px",
                      color: "white",
                      bgcolor: "#024FAA",
                      borderRadius: "40px",
                      padding: "10px 18px",
                      fontFamily: "Onest,sans-serif",
                    }}
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    fullWidth
                    onClick={onSubmit}
                    variant="contained"
                    sx={{
                      width: "180px",
                      mt: 3,
                      mb: 2,
                      textTransform: "none",
                      fontSize: "16px",
                      color: "white",
                      bgcolor: "#024FAA",
                      borderRadius: "40px",
                      padding: "10px 18px",
                      fontFamily: "Onest,sans-serif",
                    }}
                  >
                    Save
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
}
