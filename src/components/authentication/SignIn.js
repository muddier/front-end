import React, { useState } from "react";
import { Modal, Button, Form, Nav } from "react-bootstrap";

function SignIn() {
	const [show, setShow] = useState(true);
	const handleClose = () => {
		setShow(false);
	};

	const [user, setUser] = useState({
		username: "",
		password1: "",
		password2: "",
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
					<Modal.Title>Log in</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form onSubmit={handleSubmit}>
						<Form.Label>email</Form.Label>
						<Form.Control
							type='email'
							onChange={handleChange}
							value={user.email}
							name='email'
						/>
						<Form.Label>password</Form.Label>
						<Form.Control
							type='password'
							onChange={handleChange}
							value={user.password}
							name='password'
						/>
						{errorMsg ? (
							<Form.Text className='text-muted'>
								{errorMsg}
							</Form.Text>
						) : null}
						<Button
							block
							size='lg'
							style={{
								marginTop: "20px",
								backgroundColor: "#1C93B9",
							}}
							variant='info'
							type='submit'
							onClick={e => handleSubmit(e)}
						>
							Login
						</Button>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<p>
						Sign up{" "}
						<Nav.Link
							style={{ display: "inline", padding: "0" }}
							href='/register'
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
