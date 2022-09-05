import { useState } from "react";

const useToken = () => {
  const getToken = () => {
    const token = JSON.parse(localStorage.getItem("token"));
    return token && token.token;
  };

  const [token, setToken] = useState(getToken());

  const saveToken = (token) => {
    localStorage.setItem("token", JSON.stringify(token));
    setToken(token.token);
  };

  return { setToken: saveToken, token };
};

export default useToken;
