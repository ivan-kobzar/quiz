import { FC } from "react";
import styled from "styled-components";

export const DefaultLayout: FC = ({ children }) => (
  <Container>{children}</Container>
);

const Container = styled.main`
  max-width: 640px;
  margin: 0 auto;
`;
