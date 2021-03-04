import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Login = (props) => {
  const [formInput, setFormInput] = useState({
    username: "",
    password: "",
  });

  let history = useHistory();

  const handleChange = (e) => {
    setFormInput({
      ...formInput,
      [e.target.name]: e.target.value,
    });
  };

  const login = (e) => {
    e.preventDefault();

    axiosWithAuth()
      .post("/api/login", formInput)
      .then((res) => {
        window.localStorage.setItem("token", res.data.payload);

        history.push("/dashboard");
      })
      .catch((err) => console.log("There was an error", err));
  };

  return (
    <div>
      <form
        style={{
          display: "flex",
          justifyContent: "center",
        }}
        onSubmit={login}
      >
        <input
          type="text"
          name="username"
          value={formInput.username}
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          value={formInput.password}
          onChange={handleChange}
        />
        <button>Log in</button>
      </form>
    </div>
  );
};

export default Login;
