import React from "react";
import styled from "styled-components";

import Card from "../components/Card";
import Button from "../components/Button";

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

const Input = styled.TextInput``;

const ButtonContainer = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  padding-horizontal: 15px;
`;

const StartGameScreen = () => {
  return (
    <Container>
      <Title>Start a New Game!</Title>

      <Card>
        <Text>Select a Number</Text>
        <Input />

        <ButtonContainer>
          <Button title="Reset" secondary />
          <Button title="Confirm" />
        </ButtonContainer>
      </Card>
    </Container>
  );
};

export default StartGameScreen;
