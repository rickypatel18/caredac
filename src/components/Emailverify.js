import * as React from "react";
import backg from "../Assets/caredac.jpg";
import { useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const defaultTheme = createTheme();

export default function Login() {
  const [otp, setOtp] = useState(["", "", "", ""]); // State to hold OTP values
  const [error, setError] = useState(""); // state to hold error message

  const handleChange = (index, value, isBackspace) => {
    if (/^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (isBackspace && index > 0) {
        document.getElementById(`e${index}`).focus(); // Move focus to the previous field
      } else if (!isBackspace && value.length === 1 && index < otp.length - 1) {
        document.getElementById(`e${index + 2}`).focus(); // Move focus to the next field
      }
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("Text");
    const pastedDigits = pastedData.match(/\d/g); // Extract only digits
    if (pastedDigits && pastedDigits.length === 4) {
      setOtp(pastedDigits);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (otp.some((value) => value === "")) {
      setError("Please fill all four OTP fields.");
    } else {
      setError(""); // Clear error message
      window.location.href = "/reset";
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
              borderRadius: "122px",
            }}
          >
            <Typography
              component="h1"
              variant="h4"
              fontWeight={600}
              sx={{ fontFamily: "Onest,sans-serif" }}
            >
              OTP Verification
            </Typography>
            <Typography
              component="h1"
              variant="h5"
              sx={{
                marginTop: "10px",
                fontSize: "16px",
                color: "grey",
                marginBottom: "16px",
                fontFamily: "Onest,sans-serif",
              }}
            >
              Enter the OTP sent to your email here
            </Typography>
            <Divider orientation="horizontal" flexItem />
            <Typography
              component="h1"
              variant="h5"
              sx={{
                marginTop: "18px",
                fontSize: "16px",
                color: "#3A3F50",
                fontWeight: 500,
                marginBottom: "6px",
                fontFamily: "Inter,sans-serif",
              }}
            >
              OTP code
            </Typography>

            <Grid
              container
              sx={{ flexGrow: 1, borderRadius: "122px" }}
              spacing={1}
            >
              {otp.map((value, index) => (
                <Grid item align="center" xs={2} key={index}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id={`e${index + 1}`}
                    name={`e${index + 1}`}
                    autoFocus={index === 0}
                    inputProps={{
                      maxLength: 1,
                      pattern: "\\d*",
                      onPaste: handlePaste,
                      fontFamily: "Onest,sans-serif",
                    }}
                    value={value}
                    onChange={(e) => {
                      const isBackspace =
                        e.target.value === "" &&
                        e.nativeEvent.inputType === "deleteContentBackward";
                      handleChange(index, e.target.value, isBackspace);
                    }}
                    sx={{
                      mt: "1px",
                      fontFamily: "Onest,sans-serif",
                    }}
                  />
                </Grid>
              ))}
            </Grid>

            {error && (
              <Typography
                component="h1"
                variant="h6"
                color="text.secondary"
                fontSize={14}
                sx={{
                  ml: "10px",
                  color: "red",
                  mt: "2px",
                }}
              >
                {error}
              </Typography>
            )}

            <Button
              type="submit"
              onClick={handleSubmit}
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                fontSize: "16px",
                padding: "16px 18px",
                fontWeight: "600",
                textTransform: "none",
                borderRadius: "40px",
                px: "70px",
                bgcolor: "#024FAA",
                borderRadius: "40px",
                border: "1px solid #024FAA ",
                textTransform: "none",
                paddingTop: "10px",
                paddingBottom: "10px",
                fontSize: "16px",
                fontWeight: 600,
                fontFamily: "Onest,sans-serif",
              }}
            >
              Verify
            </Button>
            <Typography
              component="h1"
              variant="h5"
              sx={{
                marginTop: "10px",
                fontSize: "16px",
                color: "grey",
                marginBottom: "10px",
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                fontFamily: "Onest,sans-serif",
              }}
            >
              Didn't receive OTP?{" "}
              <Link
                component="button"
                variant="body2"
                onClick={() => {
                  console.info("I'm a button.");
                }}
                sx={{
                  fontWeight: 600,
                  marginLeft: "10px",
                  textTransform: "none",
                  textDecoration: "none ",
                  fontFamily: "Inter,sans-serif ",
                  color: "#024FAA",
                }}
              >
                Resend
              </Link>
            </Typography>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
}
