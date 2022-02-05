import { FC } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useNextQuestionPageUrl } from "../../hooks/quiz/useNextQuestionPageUrl";
import { setAnswer } from "../../redux/slices/answers";
import { Question } from "../../types/question";

export const Single: FC<{ question: Question }> = ({ question }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getNextQuestionPage = useNextQuestionPageUrl();

  const handleClick = (value: string) => {
    dispatch(setAnswer({ key: question.key, value }));
    navigate(getNextQuestionPage({ [question.key]: value }));
  };

  return (
    <>
      <h1>{question.label}</h1>
      <ul>
        {question?.options?.map(({ label, value }) => (
          <li key={value}>
            <button
              onClick={() => {
                handleClick(value);
              }}
            >
              {label}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
