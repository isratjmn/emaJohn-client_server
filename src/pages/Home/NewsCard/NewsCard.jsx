import moment from "moment";
import React from "react";
import { Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
	FaBookmark,
	FaShareAlt,
	FaRegEye,
	FaStar,
	FaRegStar,
} from "react-icons/fa";
import Rating from "react-rating";

const NewsCard = ({ news }) => {
	const { _id, title, details, image_url, author, total_view, rating } = news;

	return (
		<Card className="mb-4 rounded-0">
			<Card.Header className="d-flex align-items-center">
				<div>
					<Image
						style={{ height: "40px" }}
						src={author?.img}
						roundedCircle
					/>
				</div>
				<div className="ps-2 flex-grow-1">
					<p className="mb-0">{author?.name}</p>
					<p>
						<small>
							{" "}
							{moment(author?.published_date).format("yyyy-MM-D")}
						</small>
					</p>
				</div>
				<div>
					<FaBookmark />
					<FaShareAlt />
				</div>
			</Card.Header>
			<Card.Body>
				<Card.Title>{title}</Card.Title>
				<Card.Img variant="top" src={image_url} />
				<Card.Text>
					{details.length < 250 ? (
						<>{details}</>
					) : (
						<>
							{" "}
							{details.slice(0, 250)} .....{" "}
							<Link className="fw-bold text-decoration-none" to={`/news/${_id}`}>Read More</Link>
						</>
					)}
				</Card.Text>
			</Card.Body>
			<Card.Footer className="text-muted d-flex align-items-center">
				<div className="flex-grow-1 text-black fw-semibold">
					<Rating
						placeholderRating={rating.number}
                        readonly
						emptySymbol={
							<FaRegStar/>
						}
						placeholderSymbol={
							<FaStar className="text-warning"/>
						}
						fullSymbol={
							<FaStar/>
						}
					/>
					<span className="ms-2">{rating?.number}</span>
				</div>
				<div className="text-black fw-semibold">
					<FaRegEye className="me-2" />
					{total_view}
				</div>
			</Card.Footer>
		</Card>
	);
};

export default NewsCard;
