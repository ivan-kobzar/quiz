import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import { QuizLayout } from "../layouts/QuizLayout";
import { Info } from "../components/questions/Info";
import { Multiple } from "../components/questions/Multiple";
import { Single } from "../components/questions/Single";
import { useNextQuestionPageUrl } from "../hooks/quiz/useNextQuestionPageUrl";
import { fetchQuiz } from "../redux/slices/quiz";
import { RootState } from "../redux/store";
import { QuestionType } from "../types/question";

const questionByType: Record<QuestionType, any> = {
  single: Single,
  multiple: Multiple,
  info: Info,
};

export const Quiz = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { quiz, isLoading } = useSelector((state: RootState) => state.quiz);

  const getNextQuestionPage = useNextQuestionPageUrl();

  useEffect(() => {
    dispatch(fetchQuiz());
  }, [dispatch]);

  if (isLoading) {
    return (
      <QuizLayout>
        <h1>Loading...</h1>
      </QuizLayout>
    );
  }

  if (!quiz) {
    return (
      <QuizLayout>
        <h1>Something went wrong.</h1>
      </QuizLayout>
    );
  }

  if (!id) {
    return <Navigate to={getNextQuestionPage()} />;
  }

  const question = quiz.questions.find((q) => q.key === id);

  if (!question) {
    return (
      <QuizLayout>
        <h1>There is no such question</h1>
      </QuizLayout>
    );
  }

  const QuestionComponent = questionByType[question.type];

  return (
    <QuizLayout>
      <QuestionComponent question={question} />
    </QuizLayout>
  );
};
