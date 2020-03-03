import React, { useState, useEffect } from "react";

export function Card() {
	return (
		<div className="card" style={{ width: "300px" }}>
			<img
				className="card-img-top"
				src="https://i.etsystatic.com/17236199/r/il/4dc013/1600663669/il_570xN.1600663669_kp8i.jpg"
				alt="Card image cap"
			/>
			<div className="card-body">
				<h5 className="card-title">Character</h5>
				<p className="card-text">
					Some quick example text to build on the card title and make up the bulk of the cards content.
				</p>
				<a href="#" className="btn btn-primary">
					Go to Profile
				</a>
			</div>
		</div>
	);
}
