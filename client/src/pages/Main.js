import React, { Component } from "react";
import Posts from "../components/Posts/Posts";
import Comments from "../components/Comments/Comments";
import Hero from "../components/Hero/Hero";
import "./Main.scss";
import axios from "axios";

const apiURL = "http://localhost:8080";

class Main extends Component {
	state = {
		modalOpen: false,
		mainHeroPost: null,
		postList: [],
		isLoading: true,
	};
	componentDidMount() {
		const id = this.props.match.params.id;
		axios
			.get(`${apiURL}/posts`)
			.then(({ data }) => {
				const apiData = data;
				this.setState({ postList: apiData });
				return apiData[0].id;
			})
			.then((res) => {
				const postId = id ? id : res;
				axios
					.get(`${apiURL}/posts/${postId}`)
					.then((response) => {
						this.setState({ mainHeroPost: response.data }, () => {
							this.setState({ isLoading: false });
						});
					})
					.catch((err) =>
						console.log("Check compononentDidMount for single post.", err)
					);
			})
			.catch((err) => console.log("Check componentDidMount for posts", err));
	}

	componentDidUpdate(prevProps) {
		const id = this.props.match.params.id;
		if (prevProps.match.params.id !== id) {
			axios
				.get(`${apiURL}/posts/${id}`)
				.then((newPost) => {
					this.setState({
						mainHeroPost: newPost.data,
					});
				})
				.catch((err) => {
					console.log("Check the componentDidUpdate function", err);
				});
		}
	}
	handleSubmit = (event) => {
		event.preventDefault();
		console.log(this.state.mainHeroPost.id);
		// const newComment = event.target.comment.value;

		const userName = "Miguel esteves";
		axios
			.post(`${apiURL}/posts/${this.state.mainHeroPost.id}/comments`, {
				name: userName,
				comment: event.target.description.value,
				timestamp: Date.now(),
			})
			.then(() => {
				axios
					.get(`${apiURL}/posts/${this.state.mainHeroPost.id}`)
					.then((response) => {
						this.setState({ mainHeroPost: response.data });
					});
			})
			.catch((err) => console.log(err));
		event.target.reset();
	};
	handleDelete = (commentID) => {
		const { id } = this.state.mainHeroPost;
		axios
			.delete(`${apiURL}/posts/${id}/comments/${commentID}`)
			.then(() => {
				axios
					.get(`${apiURL}/posts/${id}`)
					.then(({ data }) => {
						this.setState({
							mainHeroPost: data,
						});
					})
					.catch((err) => console.log(err, "2"));
			})
			.catch((err) => console.log(err, "1"));
	};

	render() {
		if (!this.state.mainHeroPost) {
			return <div className="loading"></div>;
		}
		return (
			<div className="container__flex--row">
				<Hero mainHeroPost={this.state.mainHeroPost} paramsId={this.props} />

				<div className="container__flex--column"></div>
				<Posts
					postList={this.state.postList}
					mainHeroPost={this.state.mainHeroPost}
					paramsId={this.props}
				/>
				<Comments
					comments={this.state.mainHeroPost}
					handleSubmit={this.handleSubmit}
					handleDelete={this.handleDelete}
				/>
			</div>
		);
	}
}
export default Main;
