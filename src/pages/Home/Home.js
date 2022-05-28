import React from "react";
import "./Home.css";
import Hero from "../../components/organism/Hero/Hero";

export const mainClass = "home-container";

const Home = () => {
	return (
		<div className={mainClass}>
			<Hero />
		</div>
	);
};

export default Home;
