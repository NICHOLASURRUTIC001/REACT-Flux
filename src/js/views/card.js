import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

export function Card(props) {
	return (
		<div className="m-4" style={{ width: "300px" }}>
			<img
				className="card-img-top"
				src="https://pngimg.com/uploads/star_wars_logo/star_wars_logo_PNG43.png"
				alt="Card image cap"
			/>
			<div className="card-body">
				<h5 className="card-title d-flex justify-content-center" style={{ color: "white" }}>
					Film
				</h5>
				<p className="card-text" style={{ color: "white" }}>
					<div>{props.title}</div>
					<div>{props.episode_id}</div>
					<div>{props.director}</div>
				</p>
				<a href="#" className="btn btn-warning">
					Go to Profile
				</a>
			</div>
		</div>
	);
}
Card.propTypes = {
	title: PropTypes.string,
	episode_id: PropTypes.string,
	director: PropTypes.string
};
