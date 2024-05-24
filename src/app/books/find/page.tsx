import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function Find() {
  return (
    <Container>
      <Box
        sx={{
          alignItems: "center",
          position: 'relative',
          width: "100%",
        }} 
      >
        <Typography variant="h2" component="h1" sx={{ mb: 2, textAlign: "center"}} color='info.main'>
          Find Books
        </Typography>
      </Box>
    </Container>
  );
}