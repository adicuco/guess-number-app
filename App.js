import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";

import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";

import theme from "./constants/theme";

const Container = styled.View`
  flex: 1;
`;

export default function App() {
  const [userNumber, setUserNumber] = useState();

  const handleStartGame = number => {
    setUserNumber(number);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header title="Guess a Number" />

        {userNumber ? (
          <GameScreen userNumber={userNumber} />
        ) : (
          <StartGameScreen onStartGame={handleStartGame} />
        )}
      </Container>
    </ThemeProvider>
  );
}
