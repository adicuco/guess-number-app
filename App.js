import React from "react";
import styled from "styled-components";

import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";

const Container = styled.View`
  flex: 1;
`;

export default function App() {
  return (
    <Container>
      <Header title="Guess a Number" />
      <StartGameScreen />
    </Container>
  );
}
