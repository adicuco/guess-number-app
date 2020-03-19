import React from "react";
import styled from "styled-components";

import Button from "../components/Button";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text``;

const GameOverScreen = ({ rounds, userNumber, onNewGame }) => {
  return (
    <Container>
      <Text>Game Over!</Text>
      <Text>Number of rounds: {rounds}</Text>
      <Text>Number was: {userNumber}</Text>
      <Button title="New Game" onPress={onNewGame} />
    </Container>
  );
};

export default GameOverScreen;
