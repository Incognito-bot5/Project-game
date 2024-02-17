import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { shuffle, initializeDeck } from "../../utils/gameUtils"; // You'll need to implement these functions

export const gameSlice = createSlice({
  name: "game",
  initialState: {
    username: "",
    deck: [],
    isGameOver: false,
    hasDefuseCard: false,
    wins: 0,
  },
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    startGame: (state) => {
      state.deck = initializeDeck();
      state.isGameOver = false;
      state.hasDefuseCard = false;
    },
    drawCard: (state) => {
      if (state.deck.length > 0 && !state.isGameOver) {
        const card = state.deck.pop();
        switch (card.type) {
          case "ExplodingKitten":
            if (state.hasDefuseCard) {
              state.hasDefuseCard = false; // Use the defuse card
            } else {
              state.isGameOver = true;
            }
            break;
          case "Defuse":
            state.hasDefuseCard = true;
            break;
          case "Shuffle":
            state.deck = shuffle(state.deck);
            break;
          // No specific action needed for Cat card
        }
      }
    },
    incrementWins: (state) => {
      if (!state.isGameOver && state.deck.length === 0) {
        state.wins++;
      }
    },
  },
});

export const { setUsername, startGame, drawCard, incrementWins } =
  gameSlice.actions;

export default gameSlice.reducer;
