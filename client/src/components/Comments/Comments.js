import React from "react";
import "./Comments.scss";
import avatar from "../../assets/images/migz.jpeg";

export default function Comments({ comments, handleSubmit, handleDelete }) {
	return (
		<div
			// key={comments.id}
			className="comments"
		>
			<div className="comments--qty">
				<p>{`${comments.comments.length} Comments`}</p>
			</div>
			<div className="form__container">
				<div className="form__container--left">
					<div className="form__avatar__wrapper">
						<img src={avatar} className="avatar" alt="profile"></img>
					</div>
				</div>

				<div className="form__container--right">
					<form
						id="form"
						className="form__wrapper"
						name="comment-form"
						onSubmit={handleSubmit}
					>
						<label className="form__subheading" for="userComment">
							JOIN THE CONVERSATION
						</label>
						<div className="form__input--container">
							<textarea
								className="input input--form"
								rows="1"
								type="textarea"
								name="description"
								placeholder="Write comment here"
							/>
							<button className="button button--comment">COMMENT</button>
						</div>
					</form>
				</div>
			</div>
			<div className="comments--display">
				{comments.comments
					.reverse()
					.map(({ name, timestamp, comment, commentID }) => {
						return (
							<div className="comments__card">
								<img className="avatar" src={avatar} alt="profile"></img>

								<div className="comments__container" key={comments.id}>
									<div className="comments--info">
										<p className="comments--name">{name}</p>
										<p className="comments--date">
											{
												(timestamp = new Date(timestamp).toLocaleDateString(
													"en-US"
												))
											}
										</p>
									</div>
									<div>
										<p className="comments--comment">{comment}</p>
									</div>
									<div className="comments__wrapper--delete">
										{/* <p
											className="comments--delete"
											onClick={() => handleDelete(commentID)}
										>
											Edit
										</p> */}
										<p
											className="comments--delete"
											onClick={() => handleDelete(commentID)}
										>
											Delete
										</p>
									</div>
								</div>
							</div>
						);
					})}
			</div>
		</div>
	);
}
