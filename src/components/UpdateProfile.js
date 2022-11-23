import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button, Container } from "react-bootstrap";
import '../styles/index.css'
import { useUserAuth } from "../context/UserAuthContext";

  const UpdateProfile = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const { user, updateEmail, updatePassword} = useUserAuth();
 
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    const promises =[]
    if (email.current.value !== user.email) {
        promises.push(updateEmail(email.current.value))
    }
    if (password.current.value ) {
        promises.push(updatePassword(password.current.value))
    }
    Promise.all (promises).then (() => {
        navigate.push ('/')
    }).catch(() =>{
        setError('failed to update account')
    })

    
    
    try {
      await UpdateProfile(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
       <>
 <div className="app-body">
        <Container style={{ marginTop: '95px' }}>


        <h2 className="mb-3 text-center">Update Profile </h2>
        <div className="row">
          <div className="col-md-3"></div>
            <div className="col-md-6">
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label >Email</Form.Label>
            <Form.Control
              type="email"  required defaultValue={user.email}
              placeholder="name@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>New password</Form.Label>
            <Form.Control
              type="password" required
              placeholder="Leave blank to keep the same"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Confirm password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <div className="d-grid gap-2">
            <Button id="updateProfile" variant="outline-primary" type="Submit">
            Update  </Button>
          </div>
        </Form>
      
      <div className="p-4 box mt-3 text-center">
         <Link className="cancel" to="/">Cancel</Link>
      </div>
          </div>
          </div>
          <div className="col-md-3"></div>
      </Container>
      </div>
      
      </>
  );
};

export default UpdateProfile;
