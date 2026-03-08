import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios"
import { ToastContainer, toast } from "react-toastify";
import "../signup/signup.css"
function SignUp() {
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });
  const { email, password, username } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BACKEND}/api/auth/signup`,
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          window.location.replace(process.env.REACT_APP_DASHBOARD);
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
      username: "",
    });
  };
  return (
    <>
      <div className="container signup-section">
        <div className="row align-items-center">

          {/* Image Section */}
          <div className="col-md-7 text-center">
            <img
              className="signup-image"
              src="media/images/signup.png"
              alt="signup"
            />
          </div>

          {/* Form Section */}
          <div className="col-md-5 d-flex justify-content-center">
            <div className="form_container">
              <h2>Signup Now</h2>

              <form onSubmit={handleSubmit}>
                <div className="input-group">
                  <label>Username</label>
                  <input
                    type="text"
                    name="username"
                    value={username}
                    placeholder="Enter your username"
                    onChange={handleOnChange}
                  />
                </div>

                <div className="input-group">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    placeholder="Enter your email"
                    onChange={handleOnChange}
                  />
                </div>

                <div className="input-group">
                  <label>Password</label>
                  <input
                    type="password"
                    name="password"
                    value={password}
                    placeholder="Enter your password"
                    onChange={handleOnChange}
                  />
                </div>

                <button type="submit">Submit</button>

                <span>
                  Already have an account? <Link to="/login">Login</Link>
                </span>
              </form>

              <ToastContainer />
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default SignUp;
