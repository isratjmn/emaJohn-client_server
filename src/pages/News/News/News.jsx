import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import EditorInsights from "../EditorInsights/EditorInsights";

const News = () => {
	const news = useLoaderData();
	const {
		_id,
		title,
		details,
		category_id,
		image_url,
		author,
		total_view,
		rating,
	} = news;
	return (
		<div>
			<Card className="mt-4 rounded-2">
				<Card.Img variant="top" src={image_url} />
				<Card.Body>
					<Card.Title>{title}</Card.Title>
					<Card.Text>{details}</Card.Text>

					<Link to={`/category/${category_id}`}>
						<Button className="rounded-0 px-4" variant="danger">
							<FaArrowLeft />
							All News in this Category
						</Button>
					</Link>
				</Card.Body>
			</Card>
            <EditorInsights></EditorInsights>
		</div>
	);
};

export default News;
