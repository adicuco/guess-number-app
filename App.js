import React from "react";
import styled, { ThemeProvider } from "styled-components";

import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";

import theme from "./constants/theme";

const Container = styled.View`
  flex: 1;
`;

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header title="Guess a Number" />
        <StartGameScreen />
      </Container>
    </ThemeProvider>
  );
}
