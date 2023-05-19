import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";

const Loginone = () => {
  return (
    <div>
      <form>
        <Box
          display="flex"
          flexDirection="column"
          maxWidth={400}
          alignItems="center"
          justifyContent="center"
          margin="auto"
        >
          <Typography>Login</Typography>
          <TextField></TextField>
          <TextField></TextField>
          <TextField></TextField>
          <Button>Login</Button>
        </Box>
      </form>
    </div>
  );
};
export default Loginone;
