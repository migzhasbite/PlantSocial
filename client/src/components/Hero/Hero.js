import "./Hero.scss";
import message from "../../assets/icons/message-rectangular-empty-outlined-speech-bubble.svg";
import likes from "../../assets/icons/likes-2.svg";
import share from "../../assets/icons/share.svg";
import Modal from "../Modal/Modal";
import { useState } from "react";

export default function Hero({ mainHeroPost, handleSubmit, handleDelete }) {
	const [modal, setmodal] = useState(true);
	const Toggle = () => setmodal(!modal);
	const { image, title } = mainHeroPost;
	return (
		<section className="hero">
			<div className="hero__wrapper">
				<img className="hero--image" src={image} alt={title} />
				<div className="hero__icons__container">
					<img
						className="hero__icons"
						src={message}
						alt="icons"
						onClick={Toggle}
					/>
					{modal ? (
						""
					) : (
						<Modal
							show={modal}
							close={Toggle}
							comments={mainHeroPost}
							handleSubmit={handleSubmit}
							handleDelete={handleDelete}
						/>
					)}
					<img className="hero__icons" src={likes} alt="likes"></img>
					<img className="hero__icons" src={share} alt="share"></img>
				</div>
			</div>
		</section>
	);
}
