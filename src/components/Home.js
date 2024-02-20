import React from "react";
import Navbar from "./Navbar";
import { Box, Grid, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

import Stack from "@mui/material/Stack";

const Home = () => {
  return (
    <div>
      <Navbar />

      <Box
        borderRadius={2}
        sx={{
          mt: "10px",
          p: "10px",
          backgroundColor: "#f5f4f9",
          mb: 1,
          width: "300px",
          ml: 2,
        }}
      >
        <Grid
          container
          justifyContent="flex-start"
          alignItems="center"
          direction="row"
          flexWrap="nowrap"
        >
          <Grid
            item
            sx={{
              marginRight: "2px",
            }}
          >
            <AccessTimeIcon />
          </Grid>

          <Grid>
            <Typography
              sx={{
                color: "green",
              }}
            >
              Available
            </Typography>
            <Typography fontSize={12}>Till 26th january</Typography>
          </Grid>
          <Grid item>
            <Typography
              sx={{
                ml: 5,
              }}
            >
              Clear
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <Grid container justifyContent="space-between" alignItems="center">
        <Box
          sx={{
            mr: 50,
            mt: 1,
          }}
        >
          <Grid
            item
            container
            display="flex"
            alignItems="center"
            justifyContent="flex-start"
            direction="row"
          >
            <Grid
              item
              sx={{
                mt: 1,
                ml: 4,
              }}
            >
              <Typography sx={{ ml: 2 }}>Upcoming Shifts</Typography>
            </Grid>
            <Grid
              item
              sx={{
                mt: 1,
                ml: 12,
              }}
            >
              <Typography sx={{ ml: 2, color: "orange" }}>View</Typography>
            </Grid>
          </Grid>

          {/* Additional content below Upcoming Shifts */}
          <Box sx={{ mt: 1, ml: 5, width: "300px" }}>
            <Box
              borderRadius={2}
              sx={{
                mt: "10px",
                p: "20px",
                backgroundColor: "#f5f4f9",
                mb: 3,
              }}
            >
              <Grid
                container
                justifyContent="space-between"
                alignItems="center"
                direction="row"
                flexWrap="nowrap"
              >
                <Grid item>
                  <Stack direction="row" spacing={2}>
                    <Avatar alt="P" src="/static/images/avatar/1.jpg" />
                  </Stack>
                </Grid>
                <Box>
                  <Grid>
                    <Typography>Paula mora</Typography>
                    <Typography fontSize={12}>oct 17,2023 1.55 am</Typography>
                  </Grid>
                </Box>
                <Grid item>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      borderRadius: "50px",
                      backgroundColor: "#dff3e2",

                      display: "flex",
                      alignItems: "center",
                      padding: "8px 16px", // Adjust padding as needed
                    }}
                  >
                    <AccessTimeIcon />2 hr
                  </Typography>
                </Grid>
              </Grid>
            </Box>

            <Box
              borderRadius={2}
              sx={{
                mt: "10px",
                p: "20px",
                backgroundColor: "#f5f4f9",
                mb: 3,
              }}
            >
              <Grid
                container
                justifyContent="space-between"
                alignItems="center"
                direction="row"
                flexWrap="nowrap"
              >
                <Grid item>
                  <Stack direction="row" spacing={2}>
                    <Avatar alt="S" src="/static/images/avatar/1.jpg" />
                  </Stack>
                </Grid>
                <Box>
                  <Grid>
                    <Typography>Stephanie sharkey</Typography>
                    <Typography fontSize={12}>oct 17,2023 1.55 am</Typography>
                  </Grid>
                </Box>
                <Grid item>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      borderRadius: "50px",
                      backgroundColor: "#dff3e2",

                      display: "flex",
                      alignItems: "center",
                      padding: "8px 16px", // Adjust padding as needed
                    }}
                  >
                    <AccessTimeIcon />2 hr
                  </Typography>
                </Grid>
              </Grid>
            </Box>

            <Box
              borderRadius={2}
              sx={{
                mt: "10px",
                p: "20px",
                backgroundColor: "#f5f4f9",
                mb: 3,
              }}
            >
              <Grid
                container
                justifyContent="space-between"
                alignItems="center"
                direction="row"
                flexWrap="nowrap"
              >
                <Grid item>
                  <Stack direction="row" spacing={2}>
                    <Avatar alt="A" src="/static/images/avatar/1.jpg" />
                  </Stack>
                </Grid>
                <Box>
                  <Grid>
                    <Typography>Alex buckmaster</Typography>
                    <Typography fontSize={12}>oct 17,2023 1.55 am</Typography>
                  </Grid>
                </Box>
                <Grid item>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      borderRadius: "50px",
                      backgroundColor: "#dff3e2",

                      display: "flex",
                      alignItems: "center",
                      padding: "8px 16px", // Adjust padding as needed
                    }}
                  >
                    <AccessTimeIcon />2 hr
                  </Typography>
                </Grid>
              </Grid>
            </Box>
            <Box
              borderRadius={2}
              sx={{
                mt: "10px",
                p: "20px",
                backgroundColor: "#f5f4f9",
                mb: 3,
              }}
            >
              <Grid
                container
                justifyContent="space-between"
                alignItems="center"
                direction="row"
                flexWrap="nowrap"
              >
                <Grid item>
                  <Stack direction="row" spacing={2}>
                    <Avatar alt="P" src="/static/images/avatar/1.jpg" />
                  </Stack>
                </Grid>
                <Box>
                  <Grid>
                    <Typography>Paula mora</Typography>
                    <Typography fontSize={12}>oct 17,2023 1.55 am</Typography>
                  </Grid>
                </Box>
                <Grid item>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      borderRadius: "50px",
                      backgroundColor: "#dff3e2",

                      display: "flex",
                      alignItems: "center",
                      padding: "8px 16px", // Adjust padding as needed
                    }}
                  >
                    <AccessTimeIcon />2 hr
                  </Typography>
                </Grid>
              </Grid>
            </Box>
            <Box
              borderRadius={2}
              sx={{
                mt: "10px",
                p: "20px",
                backgroundColor: "#f5f4f9",
                mb: 3,
              }}
            >
              <Grid
                container
                justifyContent="space-between"
                alignItems="center"
                direction="row"
                flexWrap="nowrap"
              >
                <Grid item>
                  <Stack direction="row" spacing={2}>
                    <Avatar alt="P" src="/static/images/avatar/1.jpg" />
                  </Stack>
                </Grid>
                <Box>
                  <Grid>
                    <Typography>Paula mora</Typography>
                    <Typography fontSize={12}>oct 17,2023 1.55 am</Typography>
                  </Grid>
                </Box>
                <Grid item>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      borderRadius: "50px",
                      backgroundColor: "#dff3e2",

                      display: "flex",
                      alignItems: "center",
                      padding: "8px 16px", // Adjust padding as needed
                    }}
                  >
                    <AccessTimeIcon />2 hr
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>

        {/* Rest of the code remains unchanged */}
        <Box
          sx={{
            mr: 50,
            mt: 1,
          }}
        >
          <Grid item container alignItems="center" sx={{ marginTop: "10px" }}>
            <Grid item>
              <Typography sx={{ ml: 2 }}>Pending Shifts</Typography>
            </Grid>
            <Grid item>
              <Typography sx={{ ml: 2, color: "orange" }}>View</Typography>
            </Grid>
          </Grid>
          <Box sx={{ mt: 1, ml: 5, width: "300px" }}>
            <Box
              borderRadius={2}
              sx={{
                mt: "10px",
                p: "20px",
                backgroundColor: "#f5f4f9",
                mb: 3,
              }}
            >
              <Grid
                container
                justifyContent="space-between"
                alignItems="center"
                direction="row"
                flexWrap="nowrap"
              >
                <Grid item>
                  <Stack direction="row" spacing={2}>
                    <Avatar alt="P" src="/static/images/avatar/1.jpg" />
                  </Stack>
                </Grid>
                <Box>
                  <Grid>
                    <Typography>Paula mora</Typography>
                    <Typography fontSize={12}>oct 17,2023 1.55 am</Typography>
                  </Grid>
                </Box>
                <Grid item>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      borderRadius: "50px",
                      backgroundColor: "#dff3e2",

                      display: "flex",
                      alignItems: "center",
                      padding: "8px 16px", // Adjust padding as needed
                    }}
                  >
                    <AccessTimeIcon />2 hr
                  </Typography>
                </Grid>
              </Grid>
            </Box>

            <Box
              borderRadius={2}
              sx={{
                mt: "10px",
                p: "20px",
                backgroundColor: "#f5f4f9",
                mb: 3,
              }}
            >
              <Grid
                container
                justifyContent="space-between"
                alignItems="center"
                direction="row"
                flexWrap="nowrap"
              >
                <Grid item>
                  <Stack direction="row" spacing={2}>
                    <Avatar alt="S" src="/static/images/avatar/1.jpg" />
                  </Stack>
                </Grid>
                <Box>
                  <Grid>
                    <Typography>Stephanie sharkey</Typography>
                    <Typography fontSize={12}>oct 17,2023 1.55 am</Typography>
                  </Grid>
                </Box>
                <Grid item>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      borderRadius: "50px",
                      backgroundColor: "#dff3e2",

                      display: "flex",
                      alignItems: "center",
                      padding: "8px 16px", // Adjust padding as needed
                    }}
                  >
                    <AccessTimeIcon />2 hr
                  </Typography>
                </Grid>
              </Grid>
            </Box>

            <Box
              borderRadius={2}
              sx={{
                mt: "10px",
                p: "20px",
                backgroundColor: "#f5f4f9",
                mb: 3,
              }}
            >
              <Grid
                container
                justifyContent="space-between"
                alignItems="center"
                direction="row"
                flexWrap="nowrap"
              >
                <Grid item>
                  <Stack direction="row" spacing={2}>
                    <Avatar alt="A" src="/static/images/avatar/1.jpg" />
                  </Stack>
                </Grid>
                <Box>
                  <Grid>
                    <Typography>Alex buckmaster</Typography>
                    <Typography fontSize={12}>oct 17,2023 1.55 am</Typography>
                  </Grid>
                </Box>
                <Grid item>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      borderRadius: "50px",
                      backgroundColor: "#dff3e2",

                      display: "flex",
                      alignItems: "center",
                      padding: "8px 16px", // Adjust padding as needed
                    }}
                  >
                    <AccessTimeIcon />2 hr
                  </Typography>
                </Grid>
              </Grid>
            </Box>
            <Box
              borderRadius={2}
              sx={{
                mt: "10px",
                p: "20px",
                backgroundColor: "#f5f4f9",
                mb: 3,
              }}
            >
              <Grid
                container
                justifyContent="space-between"
                alignItems="center"
                direction="row"
                flexWrap="nowrap"
              >
                <Grid item>
                  <Stack direction="row" spacing={2}>
                    <Avatar alt="P" src="/static/images/avatar/1.jpg" />
                  </Stack>
                </Grid>
                <Box>
                  <Grid>
                    <Typography>Paula mora</Typography>
                    <Typography fontSize={12}>oct 17,2023 1.55 am</Typography>
                  </Grid>
                </Box>
                <Grid item>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      borderRadius: "50px",
                      backgroundColor: "#dff3e2",

                      display: "flex",
                      alignItems: "center",
                      padding: "8px 16px", // Adjust padding as needed
                    }}
                  >
                    <AccessTimeIcon />2 hr
                  </Typography>
                </Grid>
              </Grid>
            </Box>
            <Box
              borderRadius={2}
              sx={{
                mt: "10px",
                p: "20px",
                backgroundColor: "#f5f4f9",
                mb: 3,
              }}
            >
              <Grid
                container
                justifyContent="space-between"
                alignItems="center"
                direction="row"
                flexWrap="nowrap"
              >
                <Grid item>
                  <Stack direction="row" spacing={2}>
                    <Avatar alt="P" src="/static/images/avatar/1.jpg" />
                  </Stack>
                </Grid>
                <Box>
                  <Grid>
                    <Typography>Paula mora</Typography>
                    <Typography fontSize={12}>oct 17,2023 1.55 am</Typography>
                  </Grid>
                </Box>
                <Grid item>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      borderRadius: "50px",
                      backgroundColor: "#dff3e2",

                      display: "flex",
                      alignItems: "center",
                      padding: "8px 16px", // Adjust padding as needed
                    }}
                  >
                    <AccessTimeIcon />2 hr
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
        <Box>
          <Grid item container alignItems="center" sx={{ marginTop: "10px" }}>
            <Grid item>
              <Typography sx={{ ml: 2 }}>Recent reviews</Typography>
            </Grid>
            <Grid item>
              <Typography sx={{ ml: 2, color: "orange" }}>View</Typography>
            </Grid>
          </Grid>
          <Box sx={{ mt: 1, ml: 5, width: "300px" }}>
            <Box
              borderRadius={2}
              sx={{
                mt: "10px",
                p: "20px",
                backgroundColor: "#f5f4f9",
                mb: 3,
              }}
            >
              <Grid
                container
                justifyContent="space-between"
                alignItems="center"
                direction="row"
                flexWrap="nowrap"
              >
                <Grid item>
                  <Stack direction="row" spacing={2}>
                    <Avatar alt="P" src="/static/images/avatar/1.jpg" />
                  </Stack>
                </Grid>
                <Box>
                  <Grid>
                    <Typography>Paula mora</Typography>
                    <Typography fontSize={12}>oct 17,2023 1.55 am</Typography>
                  </Grid>
                </Box>
                <Grid item>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      borderRadius: "50px",
                      backgroundColor: "#dff3e2",

                      display: "flex",
                      alignItems: "center",
                      padding: "8px 16px", // Adjust padding as needed
                    }}
                  >
                    <AccessTimeIcon />2 hr
                  </Typography>
                </Grid>
              </Grid>
            </Box>

            <Box
              borderRadius={2}
              sx={{
                mt: "10px",
                p: "20px",
                backgroundColor: "#f5f4f9",
                mb: 3,
              }}
            >
              <Grid
                container
                justifyContent="space-between"
                alignItems="center"
                direction="row"
                flexWrap="nowrap"
              >
                <Grid item>
                  <Stack direction="row" spacing={2}>
                    <Avatar alt="S" src="/static/images/avatar/1.jpg" />
                  </Stack>
                </Grid>
                <Box>
                  <Grid>
                    <Typography>Stephanie sharkey</Typography>
                    <Typography fontSize={12}>oct 17,2023 1.55 am</Typography>
                  </Grid>
                </Box>
                <Grid item>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      borderRadius: "50px",
                      backgroundColor: "#dff3e2",

                      display: "flex",
                      alignItems: "center",
                      padding: "8px 16px", // Adjust padding as needed
                    }}
                  >
                    <AccessTimeIcon />2 hr
                  </Typography>
                </Grid>
              </Grid>
            </Box>

            <Box
              borderRadius={2}
              sx={{
                mt: "10px",
                p: "20px",
                backgroundColor: "#f5f4f9",
                mb: 3,
              }}
            >
              <Grid
                container
                justifyContent="space-between"
                alignItems="center"
                direction="row"
                flexWrap="nowrap"
              >
                <Grid item>
                  <Stack direction="row" spacing={2}>
                    <Avatar alt="A" src="/static/images/avatar/1.jpg" />
                  </Stack>
                </Grid>
                <Box>
                  <Grid>
                    <Typography>Alex buckmaster</Typography>
                    <Typography fontSize={12}>oct 17,2023 1.55 am</Typography>
                  </Grid>
                </Box>
                <Grid item>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      borderRadius: "50px",
                      backgroundColor: "#dff3e2",

                      display: "flex",
                      alignItems: "center",
                      padding: "8px 16px", // Adjust padding as needed
                    }}
                  >
                    <AccessTimeIcon />2 hr
                  </Typography>
                </Grid>
              </Grid>
            </Box>
            <Box
              borderRadius={2}
              sx={{
                mt: "10px",
                p: "20px",
                backgroundColor: "#f5f4f9",
                mb: 3,
              }}
            >
              <Grid
                container
                justifyContent="space-between"
                alignItems="center"
                direction="row"
                flexWrap="nowrap"
              >
                <Grid item>
                  <Stack direction="row" spacing={2}>
                    <Avatar alt="P" src="/static/images/avatar/1.jpg" />
                  </Stack>
                </Grid>
                <Box>
                  <Grid>
                    <Typography>Paula mora</Typography>
                    <Typography fontSize={12}>oct 17,2023 1.55 am</Typography>
                  </Grid>
                </Box>
                <Grid item>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      borderRadius: "50px",
                      backgroundColor: "#dff3e2",

                      display: "flex",
                      alignItems: "center",
                      padding: "8px 16px", // Adjust padding as needed
                    }}
                  >
                    <AccessTimeIcon />2 hr
                  </Typography>
                </Grid>
              </Grid>
            </Box>
            <Box
              borderRadius={2}
              sx={{
                mt: "10px",
                p: "20px",
                backgroundColor: "#f5f4f9",
                mb: 3,
              }}
            >
              <Grid
                container
                justifyContent="space-between"
                alignItems="center"
                direction="row"
                flexWrap="nowrap"
              >
                <Grid item>
                  <Stack direction="row" spacing={2}>
                    <Avatar alt="P" src="/static/images/avatar/1.jpg" />
                  </Stack>
                </Grid>
                <Box>
                  <Grid>
                    <Typography>Paula mora</Typography>
                    <Typography fontSize={12}>oct 17,2023 1.55 am</Typography>
                  </Grid>
                </Box>
                <Grid item>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      borderRadius: "50px",
                      backgroundColor: "#dff3e2",

                      display: "flex",
                      alignItems: "center",
                      padding: "8px 16px", // Adjust padding as needed
                    }}
                  >
                    <AccessTimeIcon />2 hr
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
      </Grid>
    </div>
  );
};

export default Home;
