import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./navbar.css";

const Signup = (props) => {
  const { showAlert } = props;
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    const { name, email, password } = credentials;
    e.preventDefault();
    const response = await fetch(`http://localhost:5000/api/auth/createUser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      //save the auth token redirect
      localStorage.setItem("token", json.authtoken);

      //   history.push("/");
      navigate("/");
      showAlert("Account Created Successfully", "success");
    } else {
      showAlert("Invalid Details", "danger");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="container mt-3">
        <h2>Create an account to use PasswordSafe</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={credentials.name}
              aria-describedby="emailHelp"
              autoComplete="off"
              onChange={onChange}
              required
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
              name="email"
              value={credentials.email}
              aria-describedby="emailHelp"
              autoComplete="off"
              onChange={onChange}
              required
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
              name="password"
              value={credentials.password}
              onChange={onChange}
              autoComplete="off"
              minLength={5}
              required
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
              name="cpassword"
              value={credentials.cpassword}
              autoComplete="off"
              onChange={onChange}
              minLength={5}
              required
            />
          </div>

          <button
            disabled={
              !credentials.email ||
              !credentials.password ||
              !credentials.password ||
              !credentials.name
            }
            type="submit"
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
        <p className="log">
          {" "}
          <small>Already have an account ?</small>
          <a href="/login">signIn</a>
        </p>
      </div>
    </>
  );
};

export default Signup;
