import { useNavigate } from "react-router-dom";

export const BackButton = () => {
  const navigate = useNavigate();

  return (
    <>
      <button onClick={() => navigate(-1)}>go back</button>
    </>
  );
};
