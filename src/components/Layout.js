import { Box, Card, Typography } from "@mui/material";
import React from "react";

const containerStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
};

const cardStyle = {
  p: 5,
  borderRadius: 6,
};

const Layout = ({ children, title }) => {
  return (
    <Box sx={containerStyle}>
      <Card sx={cardStyle}>
        <Typography componont="p" variant="h5" fontWeight="bold">
          {title}
        </Typography>
        {children}
      </Card>
    </Box>
  );
};

export default Layout;
