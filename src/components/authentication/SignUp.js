import React, { useState } from "react";
import { Modal, Button, Form, Nav } from "react-bootstrap";
import axios from "axios";
import Loader from "react-loader-spinner";

function SignUp(props) {
  const [user, setUser] = useState({
    username: "",
    password1: "",
    password2: ""
  });
  const [mainErrorMsg, setMainErrorMsg] = useState("");
  const [subErrorMsg, setSubErrorMsg] = useState([]);
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
    e.preventDefault();
    setMainErrorMsg("");
    setSubErrorMsg("");
    setIsLoading(true);
    if (
      user.username === "" ||
      user.password1 === "" ||
      user.password2 === ""
    ) {
      setMainErrorMsg(
        "Username, password and confirm password fields are required"
      );
      return;
    }
    if (user.password1 !== user.password2) {
      setMainErrorMsg("Password fields must match.");
      return;
    }
    axios
      .post("https://mudierthegame.herokuapp.com/api/registration/", user)
      .then(res => {
        // console.log(res);
        setIsLoading(false);
        localStorage.setItem("key", res.data.key);
        props.history.push("/game");
      })
      .catch(err => {
        console.log(err.response);
        setIsLoading(false);
        if (err.response.data.username)
          setMainErrorMsg(err.response.data.username[0]);
        setSubErrorMsg(err.response.data.password1);
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
          <Modal.Title>Create Account</Modal.Title>
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
              value={user.password1}
              name="password1"
              style={{
                background: "#1d1d1d",
                color: "#fff",
                border: "1px solid #F8C129"
              }}
            />
            <Form.Label>confirm password</Form.Label>
            <Form.Control
              type="password"
              onChange={handleChange}
              value={user.password2}
              name="password2"
              style={{
                background: "#1d1d1d",
                color: "#fff",
                border: "1px solid #F8C129"
              }}
            />
            {mainErrorMsg ? (
              <Form.Text className="text-muted">{mainErrorMsg}</Form.Text>
            ) : null}
            {subErrorMsg
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
                "Get Started"
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
