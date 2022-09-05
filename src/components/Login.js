import { useState } from "react";

const Login = ({ setToken }) => {
  const [form, setForm] = useState({ username: "", password: "" });
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:8080/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((data) => data.json())
      .then((res) => {
        console.log(res);
        if (res.status === 401)
          return setErrorMsg("username or password wrong!");
        setToken(res);
      });
  };

  const handleQuery = (e) => {
    setForm((prevForm) => ({ ...prevForm, [e.target.name]: e.target.value }));
  };

  return (
    <div className="flex-center">
      <h1>Login</h1>
      {errorMsg && <p style={{ color: "red" }}>{errorMsg}</p>}
      <form className="flex-center" onSubmit={handleSubmit}>
        <div className="flex-col">
          <label htmlFor="username">username</label>
          <input
            type="text"
            name="username"
            id="username"
            onChange={handleQuery}
            required
          />
        </div>
        <div className="flex-col mb-1">
          <label htmlFor="password">password</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={handleQuery}
            required
          />
        </div>
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
