export const baseUrl = "http://79.143.31.216";

export const registerUser = (name: string, password: string) => {
  fetch(`${baseUrl}/register?username=${name}&password=${password}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    },
  });
};

export const loginUser = async (name: string, password: string) => {
  const res = await fetch(`/login?username=${name}&password=${password}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    },
  });
  return res;
};


