import { createSlice } from "@reduxjs/toolkit";

export interface QuizAnswersState {
  answers: Record<string, string | Record<string, boolean>>;
}

const initialState: QuizAnswersState = {
  answers: {},
};

export const answersSlice = createSlice({
  name: "quizAnswers",
  initialState,
  reducers: {
    setAnswer: (state, action) => {
      if (action.payload.key) {
        state.answers[action.payload.key] = action.payload.value;
      }
    },
  },
});

export const { setAnswer } = answersSlice.actions;

export default answersSlice.reducer;
