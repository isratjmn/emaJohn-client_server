import React from "react";
import logo from "../../../assets/logo.png";
import moment from "moment";
import { Button, Container } from "react-bootstrap";
import Marquee from "react-fast-marquee";



const Header = () => {
	return (
		<Container>
			<div className="text-center">
				<img className="pt-5" src={logo} alt="logo" />
				<p className="pt-3">Journalism Without Fear or Favour</p>
				<p>{moment().format("dddd, MMMM D, YYYY")}</p>
			</div>
			<div className="d-flex bg-light py-3 ps-4">
				<Button className="rounded-0 px-4 py-2 fs-5" variant="danger">
					{" "}
					Latest{" "}
				</Button>{" "}
				<Marquee className="" speed={50}>
					Match Highlights: Germany vs Spain — as it happened !!!
					Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S.
					Military Aid Package Yet.....
				</Marquee>
			</div>
			
		</Container>
	);
};

export default Header;
