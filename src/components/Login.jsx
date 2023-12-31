import React from "react";
import styled from "styled-components";
function Login() {
  const MaincBox = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
    background: white;
    border-radius: 10px;
    box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.05);

    .heading {
      text-align: center;
      padding: 20px 0;
      border-bottom: 1px solid silver;
    }

    .form-inputs {
      padding: 0 40px;
      box-sizing: border-box;
    }

    .txt_field {
      position: relative;
      border-bottom: 2px solid #adadad;
      margin: 30px 0;
    }

    .txt_field input {
      width: 100%;
      padding: 0 5px;
      height: 40px;
      font-size: 16px;
      border: none;
      background: none;
      outline: none;
    }

    .txt_field label {
      position: absolute;
      top: 50%;
      left: 5px;
      color: #adadad;
      transform: translateY(-50%);
      font-size: 16px;
      pointer-events: none;
      transition: 0.5s;
    }

    .txt_field span::before {
      content: "";
      position: absolute;
      top: 40px;
      left: 0;
      width: 0%;
      height: 2px;
      background: #2691d9;
      transition: 0.5s;
    }
    .txt_field input:focus ~ label,
    .txt_field input:valid ~ label {
      top: -5px;
      color: #2691d9;
    }
    .txt_field input:focus ~ span::before,
    .txt_field input:valid ~ span::before {
      width: 100%;
    }

    .pass {
      margin: -5px 0 20px 5px;
      color: #a6a6a6;
      cursor: pointer;
    }
    .pass:hover {
      text-decoration: underline;
    }

    .subm {
      width: 100%;
      height: 50px;
      border: 1px solid;
      background: #2691d9;
      border-radius: 25px;
      font-size: 18px;
      color: #e9f4fb;
      font-weight: 700;
      cursor: pointer;
      outline: none;
    }

    .subm:hover {
      border-color: #2691d9;
      transition: 0.5s;
    }

    .signup_link {
      margin: 30px 0;
      text-align: center;
      font-size: 16px;
      color: #666666;
    }
    .signup_link a {
      color: #2691d9;
      text-decoration: none;
    }
    .signup_link a:hover {
      text-decoration: underline;
    }
  `;

  return (
    <>
      <MaincBox>
        <h1 className="heading">Login</h1>
        <form method="post" className="form-inputs" autocomplete="off">
          <div className="txt_field">
            <input type="text" required />
            <span></span>
            <label>Username</label>
          </div>
          <div className="txt_field">
            <input type="password" required />
            <span></span>
            <label>Password</label>
          </div>
          <div className="pass">Forgot Password?</div>
          <input type="submit" value="Login" className="subm" />
          <div className="signup_link">
            Not a member? <a href="/#">Signup</a>
          </div>
        </form>
      </MaincBox>
    </>
  );
}

export default Login;
