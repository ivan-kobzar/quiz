import { useSelector } from "react-redux";
import { DefaultLayout } from "../layouts/DefaultLayout";
import { RootState } from "../redux/store";

export const Result = () => {
  const { answers } = useSelector((state: RootState) => state.answers);

  return (
    <DefaultLayout>
      <ol>
        {Object.entries(answers).map(([key, value]) => (
          <li key={key}>
            {key}: {JSON.stringify(value, null, 2)}
          </li>
        ))}
      </ol>
    </DefaultLayout>
  );
};
