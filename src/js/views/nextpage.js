import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export function Nextpage() {
	const [list, setList] = useState([]);
	const [content, setContent] = useState();

	return (
		<div className="card d-flex mx-auto" style={{ width: "32rem" }}>
			<div className="card-body">
				<ul className="list-group list-group-flush">
					<li className="list-group-item">
						<input
							placeholder="Please add a task"
							value={content}
							onChange={e => setContent(e.target.value)}
							onKeyPress={e => {
								if (e.key === "Enter") {
									setList(list.concat(content));
									setContent("");
								}
							}}
						/>
						{list.map((item, index) => {
							return <div key={index}>{item}</div>;
						})}
					</li>
				</ul>
				<br />
				<br />
				<Link to="/">
					<button className="btn btn-secondary">Back home</button>
				</Link>
			</div>
		</div>
	);
}
