import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";

import Header from "./components/Header";

import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";

import theme from "./constants/theme";

const Container = styled.View`
  flex: 1;
`;

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [rounds, setRounds] = useState(0);

  const handleStartGame = number => {
    setUserNumber(number);
  };

  const handleGameOver = numOfRounds => {
    setRounds(numOfRounds);
  };

  const handleNewGame = () => {
    setRounds(0);
    setUserNumber(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header title="Guess a Number" />

        {userNumber ? (
          rounds > 0 ? (
            <GameOverScreen
              rounds={rounds}
              userNumber={userNumber}
              onNewGame={handleNewGame}
            />
          ) : (
            <GameScreen userNumber={userNumber} onGameOver={handleGameOver} />
          )
        ) : (
          <StartGameScreen onStartGame={handleStartGame} />
        )}
      </Container>
    </ThemeProvider>
  );
}
