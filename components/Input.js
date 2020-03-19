import React from "react";
import styled from "styled-components";

const Input = styled.TextInput`
  height: 30px;
  border-bottom-color: ${({ theme }) => theme.secondary};
  border-bottom-width: 1px;
  margin-vertical: 10px;
`;

export default Input;
