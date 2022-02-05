import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { RootState } from "../../redux/store";
import { BackButton } from "../ui/BackButton";

export const Header = () => {
  const { id } = useParams();
  const { quiz } = useSelector((state: RootState) => state.quiz);

  const currentPage =
    (quiz?.questions.findIndex(({ key }) => key === id) ?? 0) + 1;

  return (
    <Wrapper>
      {currentPage > 1 && <BackButton />}

      <PageCounter>{`${currentPage} of ${quiz?.questions.length}`}</PageCounter>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  padding: 24px;
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.04);
  display: flex;
  justify-content: space-between;
`;

const PageCounter = styled.div`
  margin-left: auto;
`;
