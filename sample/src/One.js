import React from "react";
import logo from "./logo.png";
import Box from "@mui/material/Box";
import { Typography, TextField, Button } from "@mui/material";

const One = () => {
  return (
    <div>
      <Box
        display={"flex"}
        flexDirection="column"
        maxWidth={400}
        alignItems="center"
        justifyContent="center"
        margin="auto"
        marginTop={5}
        padding={3}
        borderRadius={5}
        boxShadow={"5px 5px 10px #ccc"}
        sx={{
          ":hover": {
            boxShadow: "10px 10px 20px #ccc",
          },
        }}
      >
        <img src={logo} alt="logo" className="login-logo" />
        <Typography textAlign={"center"} justifyContent={"center"} padding={3}>
          <h3>Bigger. Better. Stronger</h3>
          <h5>Building Quality Relationships</h5>
        </Typography>
        {/* <TextField
          margin={"normal"}
          type={"text"}
          variant="outlined"
          placeholder="Name"
        /> */}
        <TextField
          margin={"normal"}
          type={"email"}
          variant="outlined"
          placeholder="Email"
        />
        <TextField
          margin={"normal"}
          type={"password"}
          variant="outlined"
          placeholder="Password"
        />
        <Button variant="contained" sx={{ marginTop: 3 }}>
          Login
        </Button>
      </Box>
    </div>
  );
};
export default One;
