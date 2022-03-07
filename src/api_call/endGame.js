export const endGame = async () => {
    let res = await fetch("https://word-le-backend.herokuapp.com/game/end",{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            Accept: "*/*",
                    },
        body: JSON.stringify({
            sessionId: "1234",
      noOfTries: 3,
      attemptedWords: ["CRAVE", "CREWS", "COUGH"],
      medal: "GOLD",
      timeTaken: "1m 45s",
        })
    })
    res = await res.json();

    console.log("Hii");
    console.log(res);
    console.log("done");
}
