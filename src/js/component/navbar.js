import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-dark mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1" style={{ color: "white" }}>
					Star Wars
				</span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary m-1">Check the Context in action</button>
				</Link>
				<Link to="/nextpage">
					<button className="btn btn-secondary m-1">Next Page</button>
				</Link>
				<Link to="/starwars">
					<button className="btn btn-warning m-1">Star Wars</button>
				</Link>
			</div>
		</nav>
	);
};
