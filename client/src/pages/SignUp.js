import "./SignUp.scss";
import { Link } from "react-router-dom";

const SignUp = () => {
	return (
		<>
			<div id="login-box">
				<div class="left">
					<h1>Sign up</h1>

					<input type="text" name="username" placeholder="Username" />
					<input type="text" name="email" placeholder="E-mail" />
					<input
						// type="password"
						// name="password"
						placeholder="Password"
					/>
					<input
						// type="password"
						// name="password2"
						placeholder="Retype password"
					/>

					<Link to="/posts" className="link header">
						<p type="submit" name="signup_submit" className="cta-btn">
							Continue
						</p>
					</Link>
				</div>
				<div class="right">
					<span class="loginwith">
						Sign in with
						<br />
						social network
					</span>

					<button class="social-signin facebook">Log in with facebook</button>
					<button class="social-signin twitter">Log in with Twitter</button>
					<button class="social-signin google">Log in with Google+</button>
				</div>
				<div class="or">OR</div>
			</div>
		</>
	);
};
export default SignUp;
