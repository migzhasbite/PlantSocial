import "./Modal.scss";

const Modal = ({ show, close, handleSubmit, comments }) => {
	return (
		<>
			<div className={`modal__container ${show ? "false" : "show"}`}>
				<div className="modal" onClick={(e) => e.stopPropagation()}>
					<p className="close" onClick={() => close()}>
						X
					</p>
					<form
						id="form"
						className="form__wrapper--modal"
						name="comment-form"
						onSubmit={handleSubmit}
					>
						<label className="form__subheading" for="userComment">
							LEAVE YOUR COMMENT
						</label>
						<div className="form__input--container">
							<textarea
								className="input input--form"
								rows="2"
								type="textarea"
								name="description"
								placeholder="Write comment here"
							/>
							<button
								className="button button--comment"
								onClick={(e) => {
									e.preventDefault();
									close();
								}}
							>
								COMMENT
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};
export default Modal;
