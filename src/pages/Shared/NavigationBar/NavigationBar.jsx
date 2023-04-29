import React, { useContext } from "react";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../../../providers/AuthProviders";
import { Link } from "react-router-dom";

const NavigationBar = () => {
	const { user, logOut } = useContext(AuthContext);

	const handleLogOut = () => {
		logOut()
			.then()
			.catch((error) => console.log(error));
	}

	return (
		<Container>
			<Navbar
				className="mt-4"
				collapseOnSelect
				expand="lg"
				bg="light"
				variant="light"
			>
				<Container>
					<Navbar.Brand href="#home"></Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="mx-auto">
							<Link
								className="fw-bold text-decoration-none"
								to="/category/0"
							>
								Home
							</Link>
							<Nav className="fw-bold ms-4" href="#pricing">
								About
							</Nav>
							<Nav className="fw-bold ms-4" href="#pricing">
								Career
							</Nav>
						</Nav>
						<Nav>
							{user && <FaUserCircle className="fs-1" />}

							{user ? (
								<Button
									onClick={handleLogOut}
									className="rounded-0 px-4 ms-2"
									variant="secondary"
								>
									Logout
								</Button>
							) : (
								<Link to="/login">
									<Button
										className="rounded-0 px-4 ms-2"
										variant="secondary"
									>
										Login
									</Button>
								</Link>
							)}
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</Container>
	);
};

export default NavigationBar;
