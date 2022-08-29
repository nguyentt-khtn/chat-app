import { Avatar, Box, Stack, TextField, Typography } from "@mui/material";
import React from "react";

export default function ChatMessages() {
  return (
    <div style={{ height: "100vh" }}>
      <Stack direction="row" spacing={2} p={1}>
        <Avatar alt="asdasd" src="" />
        <Typography sx={{ display: "flex", alignItems: "center" }}>
          friends Email
        </Typography>
      </Stack>
      <hr />

      <Box sx={{ display: "flex", alignItems: "flex-end", height: "87%" }}>
        <Avatar alt="asdasd" src="" />
        <TextField
          id="input-with-sx"
          placeholder="Input your message"
          variant="standard"
        />
      </Box>
    </div>
  );
}
