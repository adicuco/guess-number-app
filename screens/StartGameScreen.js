import React, { useState } from "react";
import styled from "styled-components";
import { TouchableWithoutFeedback, Keyboard } from "react-native";

import Card from "../components/Card";
import Button from "../components/Button";
import Input from "../components/Input";

const Container = styled.View`
  flex: 1;
  padding: 10px;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 20px;
  margin-vertical: 10px;
`;

const Text = styled.Text``;

const NumberInput = styled(Input)`
  width: 50px;
  text-align: center;
`;

const ButtonContainer = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  padding-horizontal: 15px;
`;

const StartGameScreen = () => {
  const [inputValue, setInputValue] = useState("");
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [number, setNumber] = useState(null);

  const handleInputChange = text => {
    setInputValue(text.replace(/[^0-9]/g, ""));
  };

  const handleReset = () => {
    setInputValue("");
    setIsConfirmed(false);
  };

  const handleConfirm = () => {
    const chosenNumber = parseInt(inputValue);
    if (chosenNumber === NaN || chosenNumber <= 0 || chosenNumber > 99) {
      return;
    }
    setIsConfirmed(true);
    setNumber(chosenNumber);
    setInputValue("");
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Container>
        <Title>Start a New Game!</Title>

        <Card>
          <Text>Select a Number</Text>
          <NumberInput
            blurOnSubmit
            keyboardType="number-pad"
            maxLength={2}
            value={inputValue}
            onChangeText={handleInputChange}
          />

          <ButtonContainer>
            <Button title="Reset" secondary onPress={handleReset} />
            <Button title="Confirm" onPress={handleConfirm} />
          </ButtonContainer>
        </Card>

        {isConfirmed && <Text>{`You chose: ${number}`}</Text>}
      </Container>
    </TouchableWithoutFeedback>
  );
};

export default StartGameScreen;
