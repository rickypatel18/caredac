import * as React from "react";
import backg from "../Assets/caredac.jpg";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import InputAdornment from "@mui/material/InputAdornment";
import LockIcon from "@mui/icons-material/Lock";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import { useForm } from "react-hook-form";

const defaultTheme = createTheme();

export default function Login() {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const [confPassword, setConfPassword] = React.useState(false);
  const handleClickConfPassword = () => setConfPassword((show) => !show);

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    clearErrors,
  } = useForm({});

  const [selectedFile, setSelectedFile] = React.useState(null);
  const [fileError, setFileError] = React.useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setFileError(false); // Clear any previous file error
  };

  const onSubmit = (data) => {
    if (!selectedFile) {
      setFileError(true);
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${backg})`,
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
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "left",
            }}
          >
            <Typography
              component="h1"
              variant="h4"
              sx={{ fontFamily: "Onest,sans-serif", fontWeight: "600" }}
            >
              Create your Profile
            </Typography>
            <Typography
              component="h1"
              variant="h5"
              sx={{
                marginTop: "10px",
                fontSize: "16px",
                color: "grey",
                fontFamily: "Onest,sans-serif",
                marginBottom: "16px",
              }}
            >
              Enter basic detail for now
            </Typography>
            <Divider orientation="horizontal" flexItem />

            <Box
              component="form"
              onSubmit={handleSubmit((data) => {
                console.log(data);
                window.location.href = "/sign1";
              })}
              noValidate
              sx={{
                fontFamily: "Onest",
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
                Full Name
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
                autoFocus
                sx={{
                  mt: "1px",
                  color: "#667085",
                }}
                InputProps={{
                  sx: {
                    borderRadius: "12px",
                    fontFamily: "Onest",
                  },
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonOutlineIcon />
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
                Email
              </Typography>
              <TextField
                margin="normal"
                required
                placeholder="Enter email"
                fullWidth
                id="email"
                {...register("email", {
                  required: "Please enter an email",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Invalid email address",
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
                    fontFamily: "Onest",
                  },
                  startAdornment: (
                    <InputAdornment position="start">
                      <MailOutlineIcon />
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
                {errors.email?.message}
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
                Mobile Number
              </Typography>
              <TextField
                margin="normal"
                required
                placeholder="Enter mobile number"
                fullWidth
                type="number"
                id="number"
                {...register("number", {
                  required: "Please enter a mobile number",
                  minLength: {
                    value: 10,
                    message: "Required Length is 10",
                  },
                  maxLength: {
                    value: 10,
                    message: "Required Length is 10",
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
                      <PhoneOutlinedIcon />
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
                {errors.number?.message}
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
                Password
              </Typography>
              <TextField
                margin="normal"
                required
                fullWidth
                {...register("password", {
                  required: "Please enter a password",
                  minLength: {
                    value: 6,
                    message: "Password should be at least 6 characters long",
                  },
                })}
                type={showPassword ? "text" : "password"}
                id="password"
                autoComplete="current-password"
                placeholder="Enter password"
                sx={{
                  mt: "1px",
                  color: "#667085",
                }}
                InputProps={{
                  sx: {
                    borderRadius: "12px",
                    fontFamily: "Onest",
                  },
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockIcon />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        edge="end"
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
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
                {errors.password?.message}
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
                Confirm Password
              </Typography>
              <TextField
                margin="normal"
                required
                fullWidth
                {...register("confirm", {
                  required: "Re-enter a password ",
                  validate: (value) =>
                    value === getValues("password") ||
                    "The passwords do not match",
                })}
                type={confPassword ? "text" : "password"}
                id="confirm"
                autoComplete="current-password"
                placeholder="Confirm password"
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
                      <LockIcon />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickConfPassword}
                        edge="end"
                      >
                        {confPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
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
                {errors.confirm?.message}
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
                Date of Birth
              </Typography>
              <TextField
                margin="normal"
                required
                fullWidth
                id="date"
                {...register("date", {
                  required: "Please select a date",
                })}
                type="date"
                autoFocus
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
                Upload Image
              </Typography>
              <TextField
                margin="normal"
                required
                fullWidth
                id="file"
                name="file"
                autoFocus
                value={selectedFile ? selectedFile.name : ""}
                InputProps={{
                  sx: {
                    borderRadius: "12px",
                    fontFamily: "Onest",
                    color: "#344054",
                  },
                  placeholder: "Upload image",
                  endAdornment: (
                    <InputAdornment position="end">
                      <Button
                        disableRipple
                        sx={{
                          marginBottom: "10px",
                          marginTop: "5px",
                          color: "#344054",
                          fontFamily: "Onest,sans-serif",
                          "&:hover": { backgroundColor: "transparent" },
                        }}
                        component="label"
                        tabIndex={-1}
                      >
                        Upload
                        <input
                          type="file"
                          name="file"
                          onChange={handleFileChange}
                          id="file"
                          accept="image/x-png,image/gif,image/jpeg"
                          style={{ display: "none" }}
                        />
                      </Button>
                    </InputAdornment>
                  ),
                }}
                sx={{
                  mt: "1px",
                }}
              />

              {fileError && (
                <Typography
                  component="h1"
                  variant="h6"
                  color="text.secondary"
                  sx={{
                    ml: "10px",
                    color: "red",
                  }}
                  fontSize={14}
                >
                  Please upload an image.
                </Typography>
              )}

              <FormControl>
                <FormLabel
                  sx={{
                    marginBottom: "0px",
                    marginTop: "5px",
                    fontSize: "16px",
                    color: "#344054",
                    fontWeight: "500",
                    fontFamily: "Onest,sans-serif",
                    "&.Mui-focused": {
                      color: "#344054",
                    },
                  }}
                >
                  Gender
                </FormLabel>
                <RadioGroup
                  id="gender"
                  {...register("gender", {
                    required: "Please select a gender",
                  })}
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  sx={{
                    fontSize: "16px",
                    fontFamily: "Onest",
                    fontWeight: "900",
                    fontSize: "16px",
                    marginTop: "1px",
                  }}
                >
                  <FormControlLabel
                    value="male"
                    control={
                      <Radio
                        sx={{
                          "&.Mui-checked": {
                            color: "#FC9155",
                          },
                        }}
                      />
                    }
                    label={
                      <span style={{ fontFamily: "Inter, sans-serif" }}>
                        Male
                      </span>
                    }
                    {...register("gender", {
                      required: "Please select your gender",
                    })}
                  />

                  <FormControlLabel
                    value="female"
                    control={
                      <Radio
                        sx={{
                          "&.Mui-checked": {
                            color: "#FC9155",
                          },
                        }}
                      />
                    }
                    label={
                      <span style={{ fontFamily: "Inter, sans-serif" }}>
                        Female
                      </span>
                    }
                    {...register("gender", {
                      required: "Please select your gender",
                    })}
                  />

                  <FormControlLabel
                    value="other"
                    control={
                      <Radio
                        sx={{
                          "&.Mui-checked": {
                            color: "#FC9155",
                          },
                        }}
                      />
                    }
                    label={
                      <span style={{ fontFamily: "Inter, sans-serif" }}>
                        Non Binary
                      </span>
                    }
                    {...register("gender", {
                      required: "Please select your gender",
                    })}
                  />
                </RadioGroup>
              </FormControl>
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
                {errors.gender?.message}
              </Typography>

              <Grid container spacing={0}>
                <Grid item>
                  <FormControlLabel
                    sx={{
                      marginTop: -3,
                    }}
                    control={
                      <Checkbox
                        sx={{
                          "&.Mui-checked": {
                            color: "#FC9155",
                          },
                        }}
                        {...register("agree", {
                          required:
                            "You must agree to the Terms and Conditions",
                        })}
                      />
                    }
                    label={
                      <Typography
                        component="span"
                        variant="h6"
                        fontSize={16}
                        marginTop={4}
                        sx={{
                          ml: "10px",
                          color: "#344054",
                          marginBottom: "8px",
                          fontFamily: "Onest",
                          fontWeight: "500",
                          fontSize: "16px",
                          fontFamily: "Onest,sans-serif",
                        }}
                      >
                        By continuing, you agree to our Terms and Conditions
                      </Typography>
                    }
                  />
                </Grid>
              </Grid>
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
                {errors.agree?.message}
              </Typography>
              <Button
                type="submit"
                fullWidth
                onClick={onSubmit}
                variant="contained"
                sx={{
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
                Sign up
              </Button>
              <Grid
                item
                align="center"
                sx={{
                  fontSize: "16px",
                  fontFamily: "Onest",
                  fontWeight: "500",
                  fontSize: "14px",
                }}
              >
                <span
                  style={{
                    fontWeight: "400",
                    color: "#667085",
                    fontSize: "16px",
                    fontFamily: "Onest,sans-serif",
                  }}
                >
                  Already have an account?{" "}
                </span>
                <Link
                  href="/login"
                  variant="body2"
                  sx={{
                    color: "#024FAA",
                    fontWeight: "600",
                    fontFamily: "Inter",
                    textDecoration: "none",
                  }}
                >
                  Login
                </Link>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
}
