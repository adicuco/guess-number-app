import React, { useState } from "react";
import styled from "styled-components";

import NumberContainer from "../components/NumberContainer";
import Card from "../components/Card";
import Button from "../components/Button";

import utils from "../utils";

const Container = styled.View`
  flex: 1;
  padding: 10px;
  align-items: center;
`;

const ButtonContainer = styled(Card)`
  flex-direction: row;
  justify-content: space-around;
  margin-top: 20px;
`;

const Text = styled.Text``;

const GameScreen = ({ userNumber }) => {
  const [guess, setGuess] = useState(
    utils.generateRandomBetween(1, 100, userNumber)
  );

  return (
    <Container>
      <Text>Opponent's Guess</Text>
      <NumberContainer number={guess} />

      <ButtonContainer>
        <Button title="Lower" />
        <Button title="Greater" />
      </ButtonContainer>
    </Container>
  );
};

export default GameScreen;
