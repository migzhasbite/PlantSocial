exports.seed = function (knex) {
	// Deletes ALL existing entries
	let arrUsers = [
		{
			id: 1,
			email: "a@g.com",
			password: "password",
			username: "Hoya Anderson",
		},
		{
			id: 2,
			email: "b@g.com",
			password: "password",
			username: "Begonia White",
		},
		{
			id: 3,
			email: "c@g.com",
			password: "password",
			username: "Mican Johnson",
		},
	];
	return knex("users")
		.del()
		.then(() => {
			// Inserts seed entries
			return knex("users").insert(arrUsers);
		});
};
