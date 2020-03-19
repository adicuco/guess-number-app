import React from "react";
import styled from "styled-components";

const Container = styled.TouchableOpacity`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  border-radius: 10px;
  background-color: ${({ theme, backgroundColor, secondary }) =>
    backgroundColor
      ? backgroundColor
      : secondary
      ? theme.secondary
      : theme.primary};
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 15px;
  color: ${({ textColor }) => textColor};
  text-align: center;
`;

const Button = ({
  title,
  onPress,
  textColor,
  backgroundColor,
  width,
  height,
  secondary
}) => (
  <Container
    backgroundColor={backgroundColor}
    activeOpacity={0.7}
    onPress={onPress}
    width={width}
    height={height}
    secondary={secondary}
  >
    <Title textColor={textColor}>{title}</Title>
  </Container>
);

Button.defaultProps = {
  title: "Button",
  onPress: () => {},
  backgroundColor: null,
  textColor: "#fff",
  width: 100,
  height: 40,
  secondary: false
};

export default Button;
