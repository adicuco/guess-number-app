import React from "react";
import styled from "styled-components";

const Card = styled.View`
  width: ${({ width }) => width}px;
  max-width: ${({ maxWidth }) => maxWidth}%;
  align-items: center;
  shadow-color: #000;
  shadow-offset: 0px 1px;
  shadow-opacity: 0.15;
  shadow-radius: 6px;
  elevation: 3;
  background-color: white;
  border-radius: 10px;
  padding: 20px;
`;

Card.defaultProps = {
  width: 300,
  maxWidth: 80
};

export default Card;
