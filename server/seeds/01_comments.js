exports.seed = function (knex) {
	// Deletes ALL existing entries
	let comments = [
		{
			id: 1,
			content: "There is no better page",
			author: "Hoya Anderson",
			email: "c@g.com",
		},
		{
			id: 2,
			content: "Wowsers",
			author: "Begonia White",
			email: "b@g.com",
		},
		{
			id: 3,
			content: "Beauties!",
			author: "Hoya Anderson",
			email: "a@g.com",
		},
	];

	return knex("comments")
		.del()
		.then(() => {
			// Inserts seed entries
			return knex("comments").insert(comments);
		});
};
