import React from "react";
import styled from "styled-components";

const Container = styled.View`
  width: 100%;
  height: 90px;
  padding-top: 36px;
  background: #ee6c4d;
  align-items: center;
  justify-content: center;
`;

const Title = styled.Text`
  color: black;
  font-size: 18px;
`;

const Header = ({ title }) => {
  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  );
};

export default Header;
