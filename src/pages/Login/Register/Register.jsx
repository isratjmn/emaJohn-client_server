import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProviders";

const Register = () => {
	const { createUser } = useContext(AuthContext);
	const [acceptance, setAcceptance] = useState(false);
	const handleRegister = (event) => {
		event.preventDefault();

		const form = event.target;
		const name = form.name.value;
		const photo = form.photo.value;
		const email = form.email.value;
		const password = form.password.value;
		console.log(name, photo, email, password);

		createUser(email, password)
			.then((result) => {
				const createdUser = result.user;
				console.log(createdUser);
			})
			.catch((error) => {
				console.log(error);
			});
	}

	const handleAcceptance = (event) => {
		setAcceptance(event.target.checked)
	}

	return (
		<Container className="w-25 py-4">
			<h3 className="mt-4 pb-2 fw-bolder">Please Register</h3>
			<Form onSubmit={handleRegister}>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Your Name</Form.Label>
					<Form.Control
						type="text"
						name="name"
						placeholder="Enter your Name"
						required
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Photo URL</Form.Label>
					<Form.Control
						type="text"
						name="photo"
						placeholder="Photo URL"
						required
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Email address</Form.Label>
					<Form.Control
						type="email"
						name="email"
						placeholder="Enter Email"
						required
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control
						type="password"
						name="password"
						placeholder="Password"
						required
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicCheckbox">
					<Form.Check
					onClick={handleAcceptance}
						type="checkbox"
						name="accept"
						label={
							<>
								Accept{" "}
								<Link to="/terms"> Terms & Condition </Link>
							</>
						}
					/>
				</Form.Group>
				<Button
					className="w-100 fw-bold"
					disabled= {!acceptance}
					variant="primary"
					type="submit"
				>
					Register
				</Button>
				<br />
				<br />
				<Form.Text className="text-danger"></Form.Text>
				<Form.Text className="text-success"></Form.Text>
				<Form.Text className="fs-6 fw-bold">
					Already Have An Account ? <Link to="/login">Login</Link>
				</Form.Text>
			</Form>
		</Container>
	);
};

export default Register;
