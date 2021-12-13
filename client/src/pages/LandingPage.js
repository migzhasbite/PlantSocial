import "./LandingPage.scss";
import logo from "../assets/icons/plant-social-logo.svg";
import { Link } from "react-router-dom";

export default function LandingPage() {
	return (
		<>
			<header className="landing">
				<div className="landing__logo-box"></div>

				<div className="landing__text-box">
					<h1 className="landing__heading">
						<span className="landing__heading--main">Plant</span>
						<img src={logo} alt="plant social logo" className="logo" />
						<span className="landing__heading--main">Social</span>
					</h1>
					<h2 className="landing__heading">
						<p className="landing__heading--sub">Share your love!</p>
					</h2>
					<Link to="/posts" className="link header">
						<p className="landing--main-page">Come Inside</p>
					</Link>
				</div>
			</header>
		</>
	);
}
