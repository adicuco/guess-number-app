import React from "react";
import styled from "styled-components";

const Container = styled.View`
  border-width: 2px;
  border-color: ${({ theme }) => theme.secondary};
  border-radius: 10px;
  padding: 10px;
  margin-vertical: 10px;
  align-items: center;
  justify-content: center;
`;

const Number = styled.Text`
  color: ${({ theme }) => theme.secondary};
  font-size: 22px;
`;

const NumberContainer = ({ number }) => {
  return (
    <Container>
      <Number>{number}</Number>
    </Container>
  );
};

export default NumberContainer;
