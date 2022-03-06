export const endGame = async () => {
  const res = await fetch("https://word-le-backend.herokuapp.com/game/end", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      Accept: "*/*",
    },
    mode: "no-cors",
    credentials: "same-origin",
    body: JSON.stringify({
      sessionId: "1234",
      noOfTries: 3,
      attemptedWords: ["CRAVE", "CREWS", "COUGH"],
      medal: "GOLD",
      timeTaken: "1m 45s",
    }),
  });
  console.log(res.json());
  return res.json();
};
