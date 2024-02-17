export const startGame = () => {
  // Dispatch action to start the game
  return {
    type: "START_GAME",
  };
};

export const drawCard = () => {
  // Dispatch action to draw a card
  return {
    type: "DRAW_CARD",
  };
};
