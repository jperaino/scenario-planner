import { Box, Container, Typography } from "@mui/material";
import React from "react";

export interface MainContentContainerProps {
  children: JSX.Element | JSX.Element[];
}

const MainContentContainer = ({ children }: MainContentContainerProps) => (
  <Container maxWidth="md" sx={{ backgroundColor: "lightgray" }}>
    {children}
  </Container>
);

export default MainContentContainer;
