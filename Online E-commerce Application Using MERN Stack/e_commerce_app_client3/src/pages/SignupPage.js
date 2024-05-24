import React from "react";
import { Form, Col, Row, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import AlertMessage from "../components/AlertMessage";

const SignupPage = () => {
  const [username, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [error, setError] = React.useState("");

  const handleUsernameChange = (e) => {
    setError("");
    setMessage("");
    setUserName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setError("");
    setMessage("");
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setError("");
    setMessage("");
    setConfirmPassword(e.target.value);
  };

  const handleEmailChange = (e) => {
    setError("");
    setMessage("");
    setEmail(e.target.value);
  };

  const registerHandler = (event) => {
    event.preventDefault();
    if (
      username === "" ||
      password === "" ||
      confirmPassword === "" ||
      email === ""
    ) {
      setError("All fields are required");
    } else {
      if (username in JSON.parse(localStorage.getItem("credentials"))) {
        setError("Username is already taken");
        setMessage("");
      } else if (password != confirmPassword) {
        setError("Passwords do not match");
      } else {
        setError("");
        setMessage("Registration successful");
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const registeredUser = {
          username: username,
          password: password,
          email: email,
          isAdmin: false,
        };
        users.push(registeredUser);
        localStorage.setItem("users", JSON.stringify(users));

        const credentials = JSON.parse(localStorage.getItem("credentials")) || [];
        credentials[username] = password;
        localStorage.setItem("credentials", JSON.stringify(credentials));
      }
    }
  };

  return (
    <>
      <Container>
        {error && <AlertMessage variant="danger" message={error} />}
        {message && <AlertMessage variant="success" message={message} />}
        <Form>
          <Form.Group controlId="username" className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => handleUsernameChange(e)}
            />
          </Form.Group>
          <Form.Group controlId="email" className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => handleEmailChange(e)}
            />
          </Form.Group>
          <Form.Group controlId="pasword" className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => handlePasswordChange(e)}
            />
          </Form.Group>
          <Form.Group controlId="confirmPassword" className="mb-3">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => handleConfirmPasswordChange(e)}
            />
          </Form.Group>
          <Button
            type="submit"
            variant="primary"
            className="mb-3"
            onClick={registerHandler}
          >
            Signup
          </Button>
        </Form>

        <Row>
          <Col>
            Have an Account ? <Link to="/login">Login</Link>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SignupPage;
