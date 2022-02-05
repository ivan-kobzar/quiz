import { Link } from "react-router-dom";
import styled from "styled-components";
import { DefaultLayout } from "../layouts/DefaultLayout";

export const Home = () => (
  <DefaultLayout>
    <Wrapper>
      <div>
        <Title>Get back in shape.</Title>
        <Button to="/quiz">Start The Quiz</Button>
      </div>
    </Wrapper>
  </DefaultLayout>
);

const Wrapper = styled.div`
  margin-top: 15rem;
`;

const Title = styled.h1``;

const Button = styled(Link)`
  display: inline-block;
  padding: 0.5rem 1rem;
  margin-top: 1rem;
  background: #aa00ff;
  color: #fff;
  text-align: center;
`;
