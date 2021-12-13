import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../../assets/icons/plant-social-logo.svg";
import "./Header.scss";

export default function Header() {
	const [modal, setmodal] = useState(true);
	const Toggle = () => setmodal(!modal);
	return (
		<header className="header">
			<div className="header__container">
				<Link to="/" className="link header">
					<div className="header__logo--wrapper">
						<span className="header__logo--title">Plant</span>
						<img className="header__logo" alt="plant-social-logo" src={logo} />
						<span className="header__logo--title">Social</span>
					</div>
				</Link>
				<Link to="/login" className="link header">
					<p className="header--login" type="submit" onClick={Toggle}>
						Login
					</p>
				</Link>
				<Link to="/signup" className="link header">
					<p className="header--login" type="submit" onClick={Toggle}>
						Sign Up
					</p>
				</Link>
			</div>
		</header>
	);
}
