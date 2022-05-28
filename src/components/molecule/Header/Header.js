import "./Header.css";
import Logo from "../../atom/Logo/Logo";
import Navbar from "../../atom/Navbar/Navbar";
import LinkButton from "../../atom/LinkButton/LinkButton";

export const mainClass = "header-container";

const Header = () => {
	return (
		<div className={mainClass}>
			<Logo />
			<div className="header-right">
				<Navbar />
				<LinkButton to={{ pathname: "/create_event" }}>CREATE</LinkButton>
			</div>
		</div>
	);
};

export default Header;
