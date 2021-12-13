const express = require("express");
const router = express.Router();
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
// const knex = require("../data/connection");

let postData = [];

const getPostData = () => {
	fs.readFile("./data/post-details.json", (err, data) => {
		if (err) {
			console.log(err);
			return;
		}
		postData = JSON.parse(data);
	});
};

getPostData();

router.get("/", (_req, res) => {
	res.json(postData);
});

router.get("/:id", (req, res) => {
	const { id } = req.params;
	console.log(id);
	const post = postData.find((post) => {
		return post.id === id;
	});
	if (post) {
		res.json(post);
	} else {
		res.status(404).send("Page not found.");
	}
});

router.post("/", (req, res) => {
	let posts = postData;
	const { title, description, image } = req.body;
	if (!(title && description && image)) {
		res.status(400).send(`Please provide title and description.`);
	}
	const newPost = {
		title,
		description,
		channel: "Miguel Esteves",
		image,
		views: "0",
		likes: "0",
		duration: "0:50",
		post: "https://project-2-api.herokuapp.com/stream",
		timestamp: new Date().getTime(),
		comments: [],
		id: uuidv4(),
	};
	posts.push(newPost);
	fs.writeFile("./data/post-details.json", JSON.stringify(posts), (err) => {
		if (err) {
			res.status(500).send(
				`Server encountered an unexpected condition that prevented
			it from uploading post.`,
				err
			);
		} else {
			console.log("Successfully created new post.");
			res.status(201).json(newPost);
		}
	});
});

router
	.post("/:id/comments", (req, res) => {
		let posts = postData;
		const { id } = req.params;
		const { comment } = req.body;
		const selectedPost = posts.find((post) => {
			return post.id === id;
		});
		const newComment = {
			commentID: uuidv4(),
			name: "Miguel Esteves",
			comment,
			likes: "0",
			timestamp: new Date().getTime(),
		};
		console.log(selectedPost);
		selectedPost.comments.push(newComment);
		fs.writeFile("./data/post-details.json", JSON.stringify(posts), (err) => {
			if (err) {
				console.log(err);
			} else {
				res.status(200).send(selectedPost.comments);
			}
		});
	})
	.delete("/:id/comments/:commentId", (req, res) => {
		let posts = postData;
		const postId = req.params.id;
		const commentId = req.params.commentId;
		const selectedPost = posts.find((post) => {
			return post.id === postId;
		});
		const deletedComment = selectedPost.comments.find((comment) => {
			return comment.commentID === commentId;
		});
		if (deletedComment) {
			selectedPost.comments.splice(
				selectedPost.comments.indexOf(deletedComment),
				1
			);
		}
		fs.writeFile(
			"./data/post-details.json",
			JSON.stringify(postData),
			(err) => {
				if (err) {
					console.log(err);
				} else {
					res.status(200).send(deletedComment);
				}
			}
		);
	});

module.exports = router;

/*
 *** Contains routes with KNEXjs logic for future build
 */
// router
// 	.get("/:id", (req, res) => {
// 		knex("posts")
// 			.where({ id: req.params.id })
// 			.then((user) => {
// 				console.log(user), res.send(user);
// 			})
// 			.catch(() => {
// 				res
// 					.status(400)
// 					.json({ message: `Error getting user ${req.params.id}` });
// 			});
// 	})
// 	.post("/", (req, res) => {
// 		knex("posts")
// 			.insert(req.body)
// 			.then((user) => res.status(201).json(user))
// 			.catch(() => {
// 				res
// 					.status(400)
// 					.json({ message: `Error creating user ${req.params.id}` });
// 			});
// 	})
// 	.put(
// 		("/:id",
// 		(req, res) => {
// 			knex("posts")
// 				.where({ id: req.params.id })
// 				.update(req.body)
// 				.then(() => res.sendStatus(204))
// 				.catch(() =>
// 					res
// 						.status(400)
// 						.json({ message: `Error updating user ${req.params.id}` })
// 				);
// 		})
// 	)
// 	.delete(
// 		("/:id",
// 		(req, res) => {
// 			knex("posts")
// 				.where({ id: req.params.id })
// 				.del()
// 				.then(() => res.sendStatus(204))
// 				.catch(() =>
// 					res
// 						.status(400)
// 						.json({ message: `Error deleting user ${req.params.id}` })
// 				);
// 		})
// 	);

// module.exports = router;
