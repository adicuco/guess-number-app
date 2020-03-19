import React from "react";
import styled from "styled-components";

const Container = styled.View`
  width: 100%;
  height: 90px;
  padding-top: 36px;
  background: ${({ theme }) => theme.primary};
  align-items: center;
  justify-content: center;
`;

const Title = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;

const Header = ({ title }) => {
  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  );
};

export default Header;
