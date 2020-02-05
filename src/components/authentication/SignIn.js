import React, { useState } from "react";
import { Modal, Button, Form, Nav } from "react-bootstrap";
import axios from "axios";
import Loader from "react-loader-spinner";

function SignIn(props) {
  const [user, setUser] = useState({
    username: "",
    password: ""
  });
  const [mainErrorMsg, setMainErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);
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
    setMainErrorMsg("");
    setIsLoading(true);
    e.preventDefault();
    if (user.username === "" || user.password === "") {
      setMainErrorMsg("Username/Password required");
      return;
    }
    axios
      .post("https://mudierthegame.herokuapp.com/api/login/", user)
      .then(res => {
        console.log(res);
        setIsLoading(false);
        localStorage.setItem("key", res.data.key);
        //TO DO - game component
        props.history.push("/game");
      })
      .catch(err => {
        console.log(err.response);
        setIsLoading(false);
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
            background: "#1d1d1d",
            borderBottom: "none"
          }}
        >
          <Modal.Title>Please Sign In</Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{
            background: "#1d1d1d"
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
                background: "#1d1d1d",
                color: "#fff",
                border: "1px solid #F8C129"
              }}
            />
            <Form.Label>password</Form.Label>
            <Form.Control
              type="password"
              onChange={handleChange}
              value={user.password}
              name="password"
              style={{
                background: "#1d1d1d",
                color: "#fff",
                border: "1px solid #F8C129"
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
                backgroundColor: "purple",
                color: "#fff"
              }}
              variant="none"
              type="submit"
              onClick={e => handleSubmit(e)}
            >
              {isLoading ? (
                <Loader type="ThreeDots" color="#fff" height={30} width={30} />
              ) : (
                "Login"
              )}
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer
          style={{
            background: "#1d1d1d",
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
