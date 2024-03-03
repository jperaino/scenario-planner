import { Container } from "@mui/material";

export interface MainContentContainerProps {
  children: JSX.Element | JSX.Element[];
}

const MainContentContainer = ({ children }: MainContentContainerProps) => (
  <Container maxWidth="lg" sx={{ padding: 1 }}>
    {children}
  </Container>
);

export default MainContentContainer;
