import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import LandingPage from "./pages/LandingPage";
import Main from "./pages/Main";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

function App() {
	return (
		<div className="App">
			<Router>
				<Header />
				<Switch>
					<Route path="/" exact component={LandingPage} />
					<Route path="/posts" component={Main} />
					<Route path="/posts/:id" component={Main} />
				</Switch>
				<Route path="/login" component={Login} />
				<Route path="/signup" component={SignUp} />
			</Router>
		</div>
	);
}

export default App;
