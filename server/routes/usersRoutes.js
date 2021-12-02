const express = require("express");
const router = express.Router();
// const auth = require("../middleware/auth");
const knex = require("../data/connection");

router
	.get("/:id", (req, res) => {
		knex("users")
			.where({ id: req.params.id })
			.then((user) => {
				console.log(user), res.send(user);
			})
			.catch(() => {
				res
					.status(400)
					.json({ message: `Error getting user ${req.params.id}` });
			});
	})
	.post("/", (req, res) => {
		knex("users")
			.insert(req.body)
			.then((user) => res.status(201).json(user))
			.catch((err) => {
				console.log(err);
			});
	})
	.put(
		("/:id",
		(req, res) => {
			knex("users")
				.where({ id: req.params.id })
				.update(req.body)
				.then(() => {
					res.sendStatus(204);
				})
				.catch(() =>
					res
						.status(400)
						.json({ message: `Error updating user ${req.params.id}` })
				);
		})
	)
	.delete(
		("/:id",
		(req, res) => {
			knex("users")
				.where({ id: req.params.id })
				.del()
				.then((data) => {
					res.sendStatus(204);
				})
				.catch(() =>
					res
						.status(400)
						.json({ message: `Error deleting user ${req.params.id}` })
				);
		})
	);

module.exports = router;
