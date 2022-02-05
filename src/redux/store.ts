import { configureStore } from "@reduxjs/toolkit";
import quizReducer from "./slices/quiz";
import answersReducer from "./slices/answers";

export const store = configureStore({
  reducer: {
    quiz: quizReducer,
    answers: answersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
