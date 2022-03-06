export const register = async () => {
  const res = await fetch(
    "https://word-le-backend.herokuapp.com/auth/register",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Accept: "*/*",
      },
      mode: "no-cors",
      credentials: "same-origin",
      body: JSON.stringify({
        name: "Pallavi",
        email: "pallavi3@gmail.com",
        password: "pwd",
        phoneNumber: "8329312685",
      }),
    }
  );
  console.log(res.json());
  return res.json();
};
