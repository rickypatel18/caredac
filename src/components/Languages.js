import React from "react";
import Typography from "@mui/material/Typography";
import Switch from "@mui/material/Switch";
import Container from "@mui/material/Container";
import { Box } from "@mui/material";

export default function Languages() {

  const [checked1, setChecked1] = React.useState(true);
  const handleChange1 = (event) => {
    setChecked1(true);
    setChecked2(false);
    setChecked3(false);
    setChecked4(false);
  };

  const [checked2, setChecked2] = React.useState(false);
  const handleChange2 = (event) => {
    setChecked2(true);
    setChecked1(false);
    setChecked3(false);
    setChecked4(false);
  };

  const [checked3, setChecked3] = React.useState(false);
  const handleChange3 = (event) => {
    setChecked3(true);
    setChecked2(false);
    setChecked1(false);
    setChecked4(false);
  };

  const [checked4, setChecked4] = React.useState(false);
  const handleChange4 = (event) => {
    setChecked4(true);
    setChecked2(false);
    setChecked3(false);
    setChecked1(false);
  };

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "100vh",
        width: "400px",
      }}
    >
      <Box
        sx={{
          border: "1px solid #D0D5DD",
          boxShadow: "2px 2px #0000000D",
          padding: "0px 16px ",
          borderRadius: "12px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            borderBottom: "1px solid #D0D5DD",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Onest",
              fontWeight: "500",
              fontSize: "14px",
              color: "#344054",
            }}
          >
            English
          </Typography>
          <Switch
            checked={checked1}
            onChange={handleChange1}
            inputProps={{ "aria-label": "controlled" }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            borderBottom: "1px solid #D0D5DD",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Onest",
              fontWeight: "500",
              fontSize: "14px",
              color: "#344054",
            }}
          >
            Malasiyan
          </Typography>
          <Switch
            checked={checked2}
            onChange={handleChange2}
            inputProps={{ "aria-label": "controlled" }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            borderBottom: "1px solid #D0D5DD",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Onest",
              fontWeight: "500",
              fontSize: "14px",
              color: "#344054",
            }}
          >
            Thai
          </Typography>
          <Switch
            checked={checked3}
            onChange={handleChange3}
            inputProps={{ "aria-label": "controlled" }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Onest",
              fontWeight: "500",
              fontSize: "14px",
              color: "#344054",
            }}
          >
            Indonesian
          </Typography>
          <Switch
            checked={checked4}
            onChange={handleChange4}
            inputProps={{ "aria-label": "controlled" }}
          />
        </Box>
      </Box>
    </Container>
  );
}
