export const login = async () => {
    let res = await fetch('https://word-le-backend.herokuapp.com/auth/login',{
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            "Accept": "application/json"
        },
        body: JSON.stringify({
            email : "ashwin@gmail.com",
            password: "pwd",
            phoneNumber: "8825709215"
        })
    })
    res = await res.json();

    console.log("Hii");
    console.log(res);
    console.log("done");
}
