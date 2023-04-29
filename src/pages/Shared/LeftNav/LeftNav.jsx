import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftNav = () => {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		fetch("http://localhost:7000/categories")
			.then((res) => res.json())
			.then((data) => setCategories(data))
			.catch((error) => console.error(error));
	}, []);
	return (
		<div>
			<h4 className="fw-bold my-4">All Caterogy</h4>
			<h4 className="fw-bold my-4 bg-light py-3 px-4">National News</h4>

			<div className="ps-4">
				{categories.map((category) => (
					<p key={category.id}>
						<Link
							to={`/category/${category.id}`}
							className="text-decoration-none text-black"
						>
							{category.name}
						</Link>
					</p>
				))}
			</div>
		</div>
	);
};

export default LeftNav;
