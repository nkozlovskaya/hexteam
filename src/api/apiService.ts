export const baseUrl = "http://79.143.31.216/";

export const registerUser = (name: string, password: string) => {
  fetch(`${baseUrl}register?username=${name}&password=${password}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    },
  });
};

export const loginUser = async (name: string, password: string) => {
  const res = await fetch(
    `${baseUrl}login?username=${name}&password=${password}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      },
    }
  );
  return res;
};

// export const addNewLink = async (text: string, access_token: string) => {
//   const res = await fetch(`${baseUrl}squeeze?link=${text}`, {
//     method: "POST",
//     headers: {
//       Authorization: `Bearer ${access_token}`,
//     },
//   });
//   return res.json();
// };

//http://79.143.31.216/squeeze?link=https://www.mail.ru/
