import React from "react";
import { AuthContext } from "./AuthProviders";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner';

const PrivateRoute = ({ children }) => {
	const { user, loading } = useContext(AuthContext);
	const location = useLocation();
	console.log("User In Private Route", user);
	if (loading) {
		return <Spinner animation="border" variant="danger" />
	}

	if (user) {
		return children;
	}
	return <Navigate state={{ from: location }} to="/login" replace></Navigate>;
};

export default PrivateRoute;
