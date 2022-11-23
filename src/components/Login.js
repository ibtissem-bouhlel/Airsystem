import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert, Row, Col, Container, CardGroup, Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import GoogleButton from "react-google-button";
import '../styles/index.css'
import { useUserAuth } from "../context/UserAuthContext";
import Logo from "../img/logo-red.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/home");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="LoginContainer flex-row align-items-center">

      <Container>
        <Row className="justify-content-center">
         <Col md="3"></Col>
          <Col md="6">
            <CardGroup>
              <Card className="p-4 card-left">
                <div className="card-body">
                  <img className="logo-top pb-2" src={Logo} alt="Arcangel"  />
          <Row>
            <Row>
              <Col lg="12" className="p-3">
              <h2 className="mb-3 text-center"> Login</h2>
              <p className="text-muted">Connectez-vous à votre compte</p>
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


              <div className="d-grid gap-2">
                <Button className="mb-3 log simpleLogin" variant="outline-primary" type="Submit">
                  Login
                  {/* <Link to="/dashboard">LogIn </Link> */}
                </Button>
              </div>
            </Form>
            <div>
              <GoogleButton
                className="g-btn"
                type="dark"
                onClick={handleGoogleSignIn}
              />
            </div>
                        <div className="p-4 box mt-3 text-center">
                          Don't have an account? <Link className="btn btn-register" to="/signup">Sign up</Link>
                        </div>
              </Col>
          </Row>
          </Row>
          </div>
          </Card>
              {/* <div className="card text-white bg-none py-5 d-xss-down-none card-right">
                <div className="card-body text-center">
                  <div>
                    <h2>S'inscrire</h2>
                    <br />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Praesent blandit lectus sem, in ullamcorper ipsum auctor lacinia.Quisque sodales.</p>
                    <div className="p-4 box mt-3 text-center">
                      Don't have an account? <Link className="btn btn-register" to="/signup">Sign up</Link>
                    </div>
                  </div>
                </div>
              </div> */}
          </CardGroup>
         </Col>
          <Col md="3"></Col>
        </Row>
      </Container>

    </div>

  );
};

export default Login;
