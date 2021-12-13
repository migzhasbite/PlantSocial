import "./Login.scss";
import { Link } from "react-router-dom";

const Login = ({ show, close, handleSubmit }) => {
	return (
		<>
			<div class="card">
				<form>
					<h2 class="title"> Log in</h2>
					<p class="subtitle">
						Don't have an account? <span> sign Up</span>
					</p>
					<div class="email-login">
						<label for="email">
							{" "}
							<p>Email</p>
						</label>
						<input
							type="text"
							placeholder="Enter Email"
							name="uname"
							required
						/>
						<label for="psw">
							<p>Password</p>
						</label>
						<input
							type="password"
							placeholder="Enter Password"
							name="psw"
							required
						/>
					</div>
					<Link to="/posts" className="link header">
						<button class="cta-btn">Log In</button>
						<p class="forget-pass" href="#">
							Forgot password?
						</p>
					</Link>
				</form>
			</div>
		</>
	);
};
export default Login;
