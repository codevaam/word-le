export const startGame = async () => {
    const res = await fetch('https://word-le-backend.herokuapp.com/game/new',{
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": '*',
            "Accept": "*/*"
        },
        mode: "no-cors",
        credentials: 'same-origin',
        body: JSON.stringify({
            "sessionId": "7123456",
            "wordId" : "62237984dad4b7e4968bade1"
        })
    })
    console.log(res.json());
    return res.json();
}

