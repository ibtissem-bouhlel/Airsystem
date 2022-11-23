import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert, Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = useUserAuth();
  let navigate = useNavigate();
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("Passwords do not match");
    try {
      await signUp(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };
  return (
       <>
      <div className="app-body">
        <Container style={{ marginTop: '95px' }}>
        <h2 className="mb-3 text-center">Registration </h2>
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          {/* <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group> */}

          <div className="d-grid gap-2">
            <Button id="signup" variant="outline-primary" type="Submit">
              Sign up
            </Button>
          </div>
        </Form>
      
      <div className="p-4 box mt-3 text-center">
        Already have an account? <Link className="login" to="/">Log In</Link>
      </div>
      </div>
      <div className="col-md-3">

      </div>
      </div>
    </Container>
      </div >
      
      </>

  );
};

export default Signup;
