import { FC } from "react";
import styled from "styled-components";
import { Header } from "../components/common/Header";

export const QuizLayout: FC = ({ children }) => (
  <>
    <Header />
    <Container>
      <main>{children}</main>
    </Container>
  </>
);

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 640px;
  margin: 0 auto;
  min-height: calc(100vh - 69px);
`;
