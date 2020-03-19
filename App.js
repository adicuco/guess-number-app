import React from "react";
import styled from "styled-components";

import Header from "./components/Header";

const Container = styled.View`
  flex: 1;
`;

export default function App() {
  return (
    <Container>
      <Header title="Guess a Number" />
    </Container>
  );
}
