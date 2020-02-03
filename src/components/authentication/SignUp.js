import React, { useState } from "react";
import { Modal, Button, Form, Nav } from "react-bootstrap";

function SignUp(props) {
  const [show, setShow] = useState(true);
  const handleClose = () => {
    setShow(false);
    props.history.push("/");
  };

  const [user, setUser] = useState({
    username: "",
    password1: "",
    password2: ""
  });

  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = () => {
    console.log("hello");
  };

  const handleSubmit = () => {
    console.log("hi");
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Create Account</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Label>username</Form.Label>
            <Form.Control
              type="text"
              onChange={handleChange}
              value={user.username}
              name="username"
            />
            <Form.Label>password</Form.Label>
            <Form.Control
              type="password"
              onChange={handleChange}
              value={user.password1}
              name="password1"
            />
            <Form.Label>confirm password</Form.Label>
            <Form.Control
              type="password"
              onChange={handleChange}
              value={user.password2}
              name="password2"
            />
            {errorMsg ? (
              <Form.Text className="text-muted">{errorMsg}</Form.Text>
            ) : null}
            <Button
              block
              size="lg"
              style={{
                marginTop: "20px",
                backgroundColor: "#EDFF86"
              }}
              variant="none"
              type="submit"
              onClick={e => handleSubmit(e)}
            >
              Get Started
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <p>
            Already a user? Sign in{" "}
            <Nav.Link
              style={{ display: "inline", padding: "0" }}
              href="/signin"
            >
              here
            </Nav.Link>
            .
          </p>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SignUp;
