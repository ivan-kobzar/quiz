import { FC, SyntheticEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useNextQuestionPageUrl } from "../../hooks/quiz/useNextQuestionPageUrl";
import { setAnswer } from "../../redux/slices/answers";
import { RootState } from "../../redux/store";
import { Question } from "../../types/question";

export const Multiple: FC<{ question: Question }> = ({ question }) => {
  const { answers } = useSelector((state: RootState) => state.answers);

  const [state, setState] = useState<Record<string, boolean>>(
    (answers[question.key] as Record<string, boolean>) ??
      question?.options?.reduce((a, b) => ({ ...a, [b.value]: false }), {}) ??
      {}
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
        <ul>
          {question?.options?.map(({ label, value }) => (
            <li key={value}>
              <label>
                {label}
                <input
                  type="checkbox"
                  checked={state[value]}
                  onChange={(e) =>
                    setState((prevState) => ({
                      ...prevState,
                      [value]: e.target.checked,
                    }))
                  }
                />
              </label>
            </li>
          ))}
        </ul>
        <button>Continue</button>
      </form>
    </>
  );
};
