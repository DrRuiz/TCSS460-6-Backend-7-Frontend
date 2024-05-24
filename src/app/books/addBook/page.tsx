import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function AddBook() {
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
          Add a New Book
        </Typography>
      </Box>
    </Container>
  );
}