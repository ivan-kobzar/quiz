import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import styled from "styled-components";

import { configStore } from "./state/store";

const { store, persistor } = configStore();

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Title>Welcom to Test day at Kilo Health</Title>
    </PersistGate>
  </Provider>
);

const Title = styled.h1`
  margin-top: 15rem;
  text-align: center;
`;

export default App;
