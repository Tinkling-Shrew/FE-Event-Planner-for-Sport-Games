import React from "react";
import "./Home.css";
import Hero from "../../components/organism/Hero/Hero";
import Footer from "../../components/molecule/Footer/Footer";

export const mainClass = "Home";

const Home = () => {
	return (
		<div className={mainClass}>
			<Hero />
			<Footer />
		</div>
	);
};

export default Home;
