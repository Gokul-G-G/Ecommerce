import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "test11@gmail.com" && password === "pass123") {
    navigate("/products");
    } else {
      setError("Invalid credentials!");
      alert(error)
    }
  };
  return (
    <div className="form-container">
      <form className="form-wrapper" onSubmit={handleSubmit}>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Enter Your Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          id="password"
          type="password"
          name="password"
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" onClick={() => {}}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
