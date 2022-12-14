import React from "react";
import Form from "../Form";
import Illustration from "../Illustration";
import classes from "../../styles/Login.module.css";
import TextInput from "../TextInput";
import Button from "../Button";

const Login = () => {
  return (
    <>
      <h1>Login to your account</h1>
      <div className="column">
        <Illustration />
        <Form className={`${classes.login}`}>
          <TextInput
            type="text"
            placeholder="Enter Email"
            icon="alternate_email"
          />
          <TextInput
            type="password"
            placeholder="Enter The Password"
            icon="lock"
          />
          <Button>Submit Now</Button>
          <div className="info">
            Don't have an account? <a href="signup.html">Signup</a> instead.
          </div>
        </Form>
      </div>
    </>
  );
};

export default Login;
