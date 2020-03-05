import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

export const Home = () => (
	<div className="text-center mt-5" style={{ color: "white" }}>
		<h1>Hello Baby Yoda!</h1>
		<p>
			<img src="https://raddezigns-raddezigns.netdna-ssl.com/decal_pics/13575_Black.jpg" />
		</p>
		<a href="#" className="btn btn-success">
			If you see this green button, bootstrap is working
		</a>
	</div>
);
