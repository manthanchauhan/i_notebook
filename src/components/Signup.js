import React, { useContext, useState } from "react";
import NoteContext from "../contexts/notes/NoteContext";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const context = useContext(NoteContext);
    const {callApi} = context;

    const navigate = useNavigate();

    const [creds, setCreds] = useState({ email: "", password: "", fname: "", lname: "", cpassword: "" });

    const onChange = (e) => {
      setCreds({ ...creds, [e.target.id]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        if (creds.password !== creds.cpassword){
            alert("'Password' and 'Confirm Password' should match");
            return;
        }

        const response = await callApi("POST", "/api/v1/users", {email: creds.email, password: creds.password, firstName: creds.fname, lastName: creds.lname});

        if (response !== null){
            localStorage.setItem('authToken', response.authToken);
            navigate("/");
        }

        console.log(response);
    }

  return (
    <div className="container">
      <form onSubmit={onSubmit}>
      <div className="mb-3">
          <label htmlFor="fname" className="form-label">
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            id="fname"
            onChange={onChange}
            value={creds.fname}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="lname" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            id="lname"
            onChange={onChange}
            value={creds.lname}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            onChange={onChange}
            value={creds.email}
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
        <div className="mb-3">
          <label htmlFor="cpassword" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="cpassword"
            onChange={onChange}
            value={creds.cpassword}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Signup;
