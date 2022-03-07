export const startGame = async () => {
    let res = await fetch('https://word-le-backend.herokuapp.com/game/new',{
        method: "POST",
        headers: {
                        'Content-Type': 'application/json',
                        "Access-Control-Allow-Origin": '*',
                        "Accept": "*/*"
                    },
        body: JSON.stringify({
            "sessionId": "7123456",
            "wordId" : "62237984dad4b7e4968bade1"
        })
    })
    res = await res.json();

    console.log("Hii");
    console.log(res);
    console.log("done");
}


