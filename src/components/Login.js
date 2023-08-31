import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./navbar.css";
// import { useHistory } from "react-router-dom";

const Login = (props) => {
  const { showAlert } = props;
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  //   let history = unstable_HistoryRouter();
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `https://mydiary-m3v3.onrender.com/api/auth/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: credentials.email,
          password: credentials.password,
        }),
      }
    );
    const json = await response.json();
    console.log(json);
    if (json.success) {
      //save the auth token redirect
      localStorage.setItem("token", json.authtoken);
      //   history.push("/");
      navigate("/");
      showAlert("Loggedin Successfully", "success");
    } else {
      showAlert("Invalid Credentials", "danger");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="mt-3">
        <h2>Login to continue to PasswordSafe</h2>
        <form onSubmit={handleSubmit}>
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
            />
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
              autoComplete="off"
              onChange={onChange}
            />
          </div>

          <button
            disabled={!credentials.email || !credentials.password}
            type="submit"
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>

        <p className="log">
          {" "}
          <small>Don't have an account ?</small>
          <a href="/signup">signUp</a>
        </p>
      </div>
    </>
  );
};

export default Login;
