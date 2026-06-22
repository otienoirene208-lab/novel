import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const [loading, setloading] = useState("");
  const [success, setsuccess] = useState("");
  const [error, seterror] = useState("");

  const navigate = useNavigate();

  const handlesubmit = async (e) => {
    e.preventDefault();
    setloading("Signing you in...");

    try {
      const formdata = new FormData();
      formdata.append("email", email);
      formdata.append("password", password);

      const response = await axios.post(
        "https://adhiambo.alwaysdata.net/api/signin",
        formdata
      );

      setloading("");

      if (response.data.success === "welcome") {
        localStorage.setItem("user", JSON.stringify(response.data.user));
        setsuccess("Login successful!");
        navigate("/");
      } else {
        seterror("Invalid email or password");
      }
    } catch (error) {
      setloading("");
      seterror("Something went wrong. Try again.");
    }
  };

  return (
    <div className="signin-wrapper">
      <div className="card signin-card shadow-lg">
        <h2 className="text-center mb-3">Welcome Back</h2>
        <p className="text-center text-muted">Sign in to continue</p>

        {loading && <div className="alert alert-info">{loading}</div>}
        {success && <div className="alert alert-success">{success}</div>}
        {error && <div className="alert alert-danger">{error}</div>}

        <form onSubmit={handlesubmit}>
          <div className="mb-3">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              className="form-control"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              className="form-control"
              placeholder="Enter your password"
              required
            />
          </div>

          <button className="btn btn-primary w-100" type="submit">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signin;