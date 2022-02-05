export const getQuiz = async () => {
  const response = await fetch(
    "https://rnd-stage.kilo.live/api/quizzes/test-day?api_token=4fa78874-1b35-4d74-9e4d-2b7e4c76ebdc"
  );
  const { data } = await response.json();
  return data;
};
