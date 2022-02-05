import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

export const useNextQuestionPageUrl = () => {
  const { quiz } = useSelector((state: RootState) => state.quiz);
  const { answers } = useSelector((state: RootState) => state.answers);

  return (newAnswer: Record<string, any> = {}) => {
    const extenderAnswers = { ...answers, ...newAnswer };
    if (!quiz) {
      return "quiz";
    }

    for (let i = 0; i < quiz.questions.length; i++) {
      const question = quiz.questions[i];
      const answer = extenderAnswers[question.key];

      if (answer === undefined) {
        return `/quiz/${question.key}`;
      }
    }

    return "/result";
  };
};
