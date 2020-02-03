import React, { useState } from "react";
import { Modal, Button, Form, Nav } from "react-bootstrap";
import axios from "axios";

function SignIn(props) {
  const [show, setShow] = useState(true);
  const handleClose = () => {
    setShow(false);
    props.history.push("/");
  };

  const [user, setUser] = useState({
    username: "",
    password: ""
  });

  const [mainErrorMsg, setMainErrorMsg] = useState("");

  const handleChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (user.username === "" || user.password === "") {
      setMainErrorMsg("Username/Password required");
      return;
    }
    axios
      .post("https://mudierthegame.herokuapp.com/api/login/", user)
      .then(res => {
        console.log(res);
        localStorage.setItem("key", res.data.key);
        //TO DO - game component
        props.history.push("/game");
      })
      .catch(err => {
        console.log(err.response);
        setMainErrorMsg(err.response.data.non_field_errors);
      });
  };

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        centered
        style={{ color: "#fff" }}
      >
        <Modal.Header
          closeButton
          style={{
            background: "#000",
            borderBottom: "none"
          }}
        >
          <Modal.Title>Please Sign In</Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{
            background: "#000"
          }}
        >
          <Form onSubmit={handleSubmit}>
            <Form.Label>username</Form.Label>
            <Form.Control
              type="text"
              onChange={handleChange}
              value={user.username}
              name="username"
              style={{
                background: "#000",
                color: "#fff",
                border: "1px solid #1C16AA"
              }}
            />
            <Form.Label>password</Form.Label>
            <Form.Control
              type="password"
              onChange={handleChange}
              value={user.password}
              name="password"
              style={{
                background: "#000",
                color: "#fff",
                border: "1px solid #1C16AA"
              }}
            />
            {mainErrorMsg ? (
              <Form.Text className="text-muted">{mainErrorMsg}</Form.Text>
            ) : null}
            <Button
              block
              size="lg"
              style={{
                marginTop: "20px",
                backgroundColor: "#FFF904"
              }}
              variant="none"
              type="submit"
              onClick={e => handleSubmit(e)}
            >
              Login
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer
          style={{
            background: "#000",
            borderTop: "none"
          }}
        >
          <p>
            New to Space Beez? Sign up{" "}
            <Nav.Link
              style={{ display: "inline", padding: "0" }}
              href="/signup"
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

export default SignIn;
