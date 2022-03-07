export const getWord = async () => {
    let res = await fetch('https://word-le-backend.herokuapp.com/word',{
        method: "GET",
        headers: {
                        'Content-Type': 'application/json',
                        "Access-Control-Allow-Origin": '*',
                        "Accept": "*/*"
                    },
       
    })
    res = await res.json();

    console.log("Hii");
    console.log(res);
    console.log("done");
}


