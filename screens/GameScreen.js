import React, { useState, useRef } from "react";
import styled from "styled-components";
import { Alert } from "react-native";

import NumberContainer from "../components/NumberContainer";
import Card from "../components/Card";
import Button from "../components/Button";

import { generateRandomBetween } from "../utils";

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
  const lowGuess = useRef(1);
  const highGuess = useRef(100);

  const [guess, setGuess] = useState(
    generateRandomBetween(lowGuess.current, highGuess.current, userNumber)
  );

  const handleNewGuess = (isLower = false) => {
    if ((isLower && guess < userNumber) || (!isLower && guess > userNumber)) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        {
          text: "Sorry!",
          style: "cancel"
        }
      ]);
      return;
    }

    if (isLower) {
      highGuess.current = guess;
    } else {
      lowGuess.current = guess;
    }

    const newGuess = generateRandomBetween(
      lowGuess.current,
      highGuess.current,
      guess
    );
    setGuess(newGuess);
  };

  return (
    <Container>
      <Text>Opponent's Guess</Text>
      <NumberContainer number={guess} />

      <ButtonContainer>
        <Button title="Lower" onPress={() => handleNewGuess(true)} />
        <Button title="Greater" onPress={() => handleNewGuess()} />
      </ButtonContainer>
    </Container>
  );
};

export default GameScreen;
