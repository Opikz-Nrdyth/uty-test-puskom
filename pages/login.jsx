import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

import "../src/assets/stylesheet/login.css";
import { useState } from "react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = "/";
  };
  return (
    <div className="container d-flex align-items-center justify-content-center bg-white bg-container">
      <div className="w-50 text-center bg-form">
        <h2>Welcome Back</h2>
        <p>Sigin with your email and password</p>
        <form className="mt-5" onSubmit={handleSubmit}>
          <FloatingLabel
            controlId="email"
            label="Email address"
            className="mb-3"
          >
            <Form.Control type="email" placeholder="name@example.com" />
          </FloatingLabel>
          <FloatingLabel controlId="password" label="Password">
            <Form.Control
              type={showPassword ? "text" : "password"}
              placeholder="Password"
            />
          </FloatingLabel>
          <div className="text-start mt-2">
            <input
              type="checkbox"
              name="viewPassword"
              id="viewPassword"
              onChange={() => {
                setShowPassword(!showPassword);
              }}
            />
            <label htmlFor="viewPassword"> &ensp;Tampilkan Password</label>
          </div>

          <button className="btn btn-primary w-100 mt-5 mb-3">Sign In</button>

          <p className="or">or</p>
          <p>
            Do have an account? <a href="sign-up">Sign Up</a>
          </p>
        </form>
      </div>
    </div>
  );
};
export default Login;
