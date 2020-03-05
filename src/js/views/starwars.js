import React, { useState, useEffect } from "react";
import { Card } from "./card";
//create your first component
export function Starwars() {
	const [films, setFilms] = useState([]);
	useEffect(() => {
		fetch("https://swapi.co/api/films/")
			.then(resp => resp.json())
			.then(data => {
				setFilms(data.results);
				console.log(data);
			});
	}, []);

	return (
		<>
			<div className="card-group d-flex justify-content-center">
				{films.map((item, index) => {
					return (
						<Card key={index} title={item.title} episode_id={item.episode_id} director={item.director} />
					);
				})}
			</div>
		</>
	);
}
