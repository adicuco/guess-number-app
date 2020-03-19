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
  const [number, setNumber] = useState("");

  const handleNumberChange = text => {
    setNumber(text.replace(/[^0-9]/g, ""));
  };

  const handleReset = () => {
    setNumber("");
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
            value={number}
            onChangeText={handleNumberChange}
          />

          <ButtonContainer>
            <Button title="Reset" secondary onPress={handleReset} />
            <Button title="Confirm" />
          </ButtonContainer>
        </Card>
      </Container>
    </TouchableWithoutFeedback>
  );
};

export default StartGameScreen;
