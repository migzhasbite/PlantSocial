exports.seed = function (knex) {
	// Deletes ALL existing entries
	let posts = [
		{
			author_id: 1,
			title: "What a beaut!",
			content: "Proud plant parent!",
		},
		{
			author_id: 2,
			title: "A flowering calathea???",
			content: "I want to learn more because I love it!",
		},
		{
			author_id: 3,
			title: "So much fuzz",
			content: "Whoa, I love this community!",
		},
	];
	return knex("posts")
		.del()
		.then(() => {
			// Inserts seed entries
			return knex("posts").insert(posts);
		});
};
