import React, { useState } from "react";
import { Modal, Button, Form, Nav } from "react-bootstrap";
import axios from "axios";

function SignUp(props) {
  const [user, setUser] = useState({
    username: "",
    password1: "",
    password2: ""
  });
  const [mainErrorMsg, setMainErrorMsg] = useState("");
  const [subErrorMsg, setSubErrorMsg] = useState([]);
  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false);
    props.history.push("/");
  };

  const handleChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post("https://mudierthegame.herokuapp.com/api/registration/", user)
      .then(res => {
        console.log(res);
        localStorage.setItem("key", res.data.key);
        //TO DO - game component
        props.history.push("/game");
      })
      .catch(err => {
        console.log(err.response);
        setMainErrorMsg(err.response.data.username[0]);
        setSubErrorMsg(err.response.data.password1);
      });
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
            {mainErrorMsg ? (
              <Form.Text className="text-muted">{mainErrorMsg}</Form.Text>
            ) : null}
            {subErrorMsg.length > 0
              ? subErrorMsg.map((msg, index) => {
                  return (
                    <Form.Text className="text-muted" key={index}>
                      {msg}
                    </Form.Text>
                  );
                })
              : null}
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
