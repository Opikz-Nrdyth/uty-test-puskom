import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import "../src/assets/stylesheet/login.css";
import { useState } from "react";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [dataRegist, setDataRegist] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = "/sign-in";
  };

  return (
    <div className="container d-flex align-items-center justify-content-center bg-white bg-container">
      <div className="w-50 text-center bg-form">
        <h2>Create Account</h2>
        <p>Complete form the below to sign up</p>
        <form className="mt-3" onSubmit={handleSubmit}>
          <FloatingLabel
            controlId="full_name"
            label="Full Name"
            className="mb-3"
          >
            <Form.Control type="text" placeholder="tofiq nur hidayat" />
          </FloatingLabel>
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

          <button className="btn btn-primary w-100 mt-5 mb-3">Sign Up</button>

          <p className="or">or</p>
          <p>
            Already have an account? <a href="sign-in">Sign In</a>
          </p>
        </form>
      </div>
    </div>
  );
};
export default Register;
