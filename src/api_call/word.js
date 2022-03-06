export const getWord = async () => {
    const res = await fetch('https://word-le-backend.herokuapp.com/word',{
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": '*',
            "Accept": "application/json"
        },
        mode: "no-cors",
        credentials: 'same-origin', 
    })

    console.log(res.json());
    return res.json();
}
