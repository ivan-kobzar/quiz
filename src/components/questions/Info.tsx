import { FC, SyntheticEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useNextQuestionPageUrl } from "../../hooks/quiz/useNextQuestionPageUrl";
import { setAnswer } from "../../redux/slices/answers";
import { RootState } from "../../redux/store";
import { Question } from "../../types/question";

export const Info: FC<{ question: Question }> = ({ question }) => {
  const { answers } = useSelector((state: RootState) => state.answers);

  const [state, setState] = useState<string>(
    (answers[question.key] as string) ?? ""
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getNextQuestionPage = useNextQuestionPageUrl();

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    dispatch(setAnswer({ key: question.key, value: state }));
    navigate(getNextQuestionPage({ [question.key]: state }));
  };

  return (
    <>
      <h1>{question.label}</h1>
      <form onSubmit={handleSubmit}>
        <input
          required
          type="text"
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
        <button disabled={!state.trim().length}>Next</button>
      </form>
    </>
  );
};
