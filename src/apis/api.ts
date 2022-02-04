import { MOCK_DATA } from "../assets/mock-data";

const MockApi = () =>
  new Promise((resolve) =>
    setTimeout(() => {
      resolve(MOCK_DATA);
    }, 100)
  );

export default MockApi;
