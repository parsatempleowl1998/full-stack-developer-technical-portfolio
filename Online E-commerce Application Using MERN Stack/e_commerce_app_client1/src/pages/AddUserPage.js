import React from "react";
import { Form, Col, Row, Container, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import AlertMessage from "../components/AlertMessage";
import UsersListPage from "./UsersListPage";

const AddUserPage = () => {
  const [username, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [success, setSuccess] = React.useState("");
  const [error, setError] = React.useState("");
  const [userList, setUserList] = React.useState(false);

  const handleUsernameChange = (e) => {
    setError("");
    setSuccess("");
    setUserName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setError("");
    setSuccess("");
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setError("");
    setSuccess("");
    setConfirmPassword(e.target.value);
  };

  const handleEmailChange = (e) => {
    setError("");
    setSuccess("");
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
        setSuccess("");
      } else if (password != confirmPassword) {
        setError("Passwords do not match");
      } else {
        setError("");
        setSuccess("Registration successful");
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const registeredUser = {
          id: users.length + 1,
          username: username,
          password: password,
          email: email,
          isAdmin: false,
        };
        users.push(registeredUser);
        localStorage.setItem("users", JSON.stringify(users));

        const credentials =
          JSON.parse(localStorage.getItem("credentials")) || [];
        credentials[username] = password;
        localStorage.setItem("credentials", JSON.stringify(credentials));
      }
    }
  };

  const handleShowUserList = (e) => {
    e.preventDefault();
    setUserList(true);
  };

  return (
    <>
      {/* <Container> */}

      {/* <LinkContainer to='/admin/users'> */}
      {!userList && (
        <>
          {error && <AlertMessage variant="danger" message={error} />}
          {success && <AlertMessage variant="success" message={success} />}
          <Button
            variant="primary"
            className="my-3"
            onClick={(e) => handleShowUserList(e)}
          >
            Users List
          </Button>
        </>
      )}
      {/* </LinkContainer> */}
      {!userList && (
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
            Add User
          </Button>
        </Form>
      )}
      {userList && <UsersListPage />}
      {/* </Container> */}
    </>
  );
};

export default AddUserPage;
