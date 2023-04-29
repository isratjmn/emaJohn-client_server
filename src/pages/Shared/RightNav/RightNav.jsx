import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import {
	FaGithub,
	FaGoogle,
	FaFacebookF,
	FaTwitter,
	FaInstagram,
} from "react-icons/fa";
import QZone from "../QZone/QZone";
import bg from '../../../assets/bg.png'

const RightNav = () => {
	return (
		<div>
			<h4 className="fw-bold my-4">Login With</h4>
			<Button variant="outline-primary" className="px-5 rounded-0 mb-3">
				<FaGoogle className="me-1" />
				Login with Google
			</Button>
			<Button variant="outline-secondary" className="px-5 rounded-0">
				<FaGithub className="me-2" />
				Login with Github
			</Button>
			<div>
				<h4 className="fw-bold my-4">Find Us On</h4>
				<ListGroup className="rounded-0">
					<ListGroup.Item>
						<FaFacebookF className="me-2" />
						Facebook
					</ListGroup.Item>
					<ListGroup.Item>
						<FaTwitter className="me-2" />
						Twitter
					</ListGroup.Item>
					<ListGroup.Item>
						<FaInstagram className="me-2" />
						Instagram
					</ListGroup.Item>
				</ListGroup>
			</div>
			<QZone />
			<div>
				<img className="w-100" src={bg} alt=""/>
			</div>
		</div>
	);
};

export default RightNav;
