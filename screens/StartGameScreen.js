import React, { useState } from "react";
import styled from "styled-components";
import { TouchableWithoutFeedback, Keyboard, Alert } from "react-native";

import Card from "../components/Card";
import Button from "../components/Button";
import Input from "../components/Input";
import NumberContainer from "../components/NumberContainer";

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

const ConfirmCard = styled(Card)`
  margin-top: 20px;
  width: 200px;
  max-width: 60%;
`;

const StartGameScreen = ({ onStartGame }) => {
  const [inputValue, setInputValue] = useState("");
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [number, setNumber] = useState();

  const handleInputChange = text => {
    setInputValue(text.replace(/[^0-9]/g, ""));
  };

  const handleReset = () => {
    setInputValue("");
    setIsConfirmed(false);
  };

  const handleConfirm = () => {
    const chosenNumber = parseInt(inputValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalied number!",
        "Number has to be a number between 1 and 99.",
        [
          {
            text: "Okay",
            style: "destructive",
            onPress: handleReset
          }
        ]
      );
      return;
    }
    setIsConfirmed(true);
    setNumber(chosenNumber);
    setInputValue("");
    Keyboard.dismiss();
  };

  const handleStartGame = () => {
    onStartGame(number);
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

        {isConfirmed && (
          <ConfirmCard>
            <Text>You selected</Text>
            <NumberContainer number={number} />
            <Button title="START GAME" width={120} onPress={handleStartGame} />
          </ConfirmCard>
        )}
      </Container>
    </TouchableWithoutFeedback>
  );
};

export default StartGameScreen;
