import { createSlice } from "@reduxjs/toolkit";
import { getQuiz } from "../../apis/getQuiz";
import { Question } from "../../types/question";
import { AppDispatch } from "../store";

export interface QuizState {
  quiz: {
    name: string;
    slug: string;
    questions: Question[];
  } | null;
  isLoading: boolean;
}

const initialState: QuizState = {
  quiz: null,
  isLoading: true,
};

export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  // TODO: add error, started
  reducers: {
    success: (state, action) => {
      state.quiz = action.payload;
      state.isLoading = false;
    },
  },
});

const { success } = quizSlice.actions;

export const fetchQuiz = () => async (dispatch: AppDispatch) => {
  try {
    const data = await getQuiz();
    dispatch(success(data));
  } catch (e: any) {
    return console.error(e.message);
  }
};

export default quizSlice.reducer;
