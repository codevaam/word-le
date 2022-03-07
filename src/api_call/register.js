export const register = async () => {
    let res = await fetch( "https://word-le-backend.herokuapp.com/auth/register",{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Accept: "*/*",
                    },
        body: JSON.stringify({
            name: "Pallavi",
            email: "pallavi34@gmail.com",
            password: "pwd",
            phoneNumber: "8329312685",
        })
    })
    res = await res.json();

    console.log("Hii");
    console.log(res);
    console.log("done");
}
