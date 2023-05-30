import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import NoteContext from "../contexts/notes/NoteContext";

const Login = () => {
  const context = useContext(NoteContext);
  const { callApi } = context;

  const navigate = useNavigate();

  const [creds, setCreds] = useState({ email: "", password: "" });

  const onChange = (e) => {
    setCreds({ ...creds, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const responseJson = await callApi("POST", "/api/v1/auth/login", creds);

    if (responseJson !== null) {
      const authToken = responseJson.authToken;
      localStorage.setItem("authToken", authToken);
      navigate("/");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            value={creds.email}
            onChange={onChange}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            onChange={onChange}
            value={creds.password}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
