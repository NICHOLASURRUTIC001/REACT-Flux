import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

export function Card(props) {
	return (
		<div className="m-4" style={{ width: "300px" }}>
			<img
				className="card-img-top"
				src="https://lh3.googleusercontent.com/proxy/l51enpwgSSBkpezvzbqORp1LGqZgZrZJbrcrX8U5g6tMAyuyeKGsEiaqodi2JahsaBq62l6TsjvcNVuOSlSIWBmdc4z5-0BWoX6w_8baajrsTA"
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
				<a href="#" className="btn btn-primary">
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
