import * as React from "react";
import backg from "../Assets/caredac.jpg";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import InputAdornment from "@mui/material/InputAdornment";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";

const defaultTheme = createTheme();

export default function Login() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    clearErrors,
  } = useForm({});
  const [selectedFiles, setSelectedFiles] = useState(new Array(6).fill(null));
  const { setError } = useForm();

  const handleFileChange = (event, index) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const updatedFiles = [...selectedFiles];
        updatedFiles[index] = file;
        setSelectedFiles(updatedFiles);
        setValue(`file${index}`, file); // Update form value
        clearErrors(`file${index}`); // Clear error for the field
        for (let i = 0; i < index; i++) {
          if (!updatedFiles[i]) {
            // Check if previous fields have files uploaded
            setError(`file${i}`, {
              type: "manual",
              message: "Please select a file.",
            });
          }
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = (data) => {
    if (selectedFiles.some((file) => !file)) {
      return;
    }
    console.log(data);
    window.location.href = "/sign2";
  };

  useEffect(() => {
    setSelectedFiles((prevFiles) =>
      prevFiles.map((file, index) => {
        if (errors[`file${index}`]) {
          return null;
        }
        return file;
      })
    );
  }, [errors]);

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
              fontWeight={600}
              sx={{ fontFamily: "Onest,sans-serif" }}
            >
              Background check
            </Typography>
            <Typography
              component="h1"
              variant="h5"
              sx={{
                marginTop: "10px",
                fontSize: "16px",
                color: "#667085",
                marginBottom: "16px",
                fontWeight: "400",
                fontFamily: "Onest,sans-serif",
              }}
            >
              Give us some of your document we will check your profile and
              submit your background check badge
            </Typography>
            <Divider orientation="horizontal" flexItem />

            <Box
              component="form"
              onSubmit={handleSubmit((data) => {
                console.log(data);
                window.location.href = "/sign2";
              })}
              noValidate
              sx={{ marginTop: "10px" }}
            >
              {[
                "COVID-19 Compliance",
                "First Aid Certification",
                "NDIS Worker Check (NDISWC)",
                "Police Check",
                "Working With Child Check",
                "Visa Documentation",
              ].map((label, index) => (
                <div key={index}>
                  <Typography
                    component="h1"
                    variant="h5"
                    sx={{
                      marginBottom: "5px",
                      marginTop: "13px",
                      fontSize: "16px",
                      color: "#344054",
                      fontWeight: "500",
                      fontFamily: "Onest,sans-serif",
                    }}
                  >
                    {label}
                  </Typography>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    value={
                      selectedFiles[index] ? selectedFiles[index].name : ""
                    }
                    InputProps={{
                      sx: { borderRadius: "12px" },
                      endAdornment: (
                        <InputAdornment position="end">
                          <Button
                            disableRipple
                            sx={{
                              bgcolor: "white",
                              color: "black",
                              border: "none",
                              "&:hover": { backgroundColor: "transparent" },
                              fontFamily: "Onest,sans-serif",
                            }}
                            component="label"
                            tabIndex={-1}
                          >
                            Upload
                            <input
                              type="file"
                              onChange={(event) =>
                                handleFileChange(event, index)
                              }
                              style={{ display: "none" }}
                            />
                          </Button>
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      mt: "1px",
                    }}
                    {...register(`file${index}`, {
                      required: `Please upload a file `,
                    })}
                  />
                  {errors[`file${index}`] && (
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
                      {errors[`file${index}`].message}
                    </Typography>
                  )}
                </div>
              ))}

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  borderRadius: "40px",
                  padding: "10px 18px",
                  px: "70px",
                  bgcolor: "#024FAA",
                  borderRadius: "40px",
                  border: "1px solid #024FAA ",
                  textTransform: "none",
                  paddingTop: "10px",
                  paddingBottom: "10px",
                  fontSize: "16px",
                  fontFamily: "Onest,sans-serif",
                  fontWeight: 600,
                }}
              >
                Next
              </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
}
