export const generateRandomBetween = (min, max, excludue) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const random = Math.floor(Math.random() * (max - min)) + min;
  if (random === excludue) {
    return generateRandomBetween(min, max, excludue);
  } else {
    return random;
  }
};
