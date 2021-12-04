exports.up = function (knex) {
	return knex.schema.createTable("comments", (table) => {
		table.increments("id");
		table.string("content");
		table.string("author");
		table.string("email");
		table.timestamp("created_at").defaultTo(knex.fn.now());
		table.timestamp("updated_at").defaultTo(knex.fn.now());
	});
};

exports.down = function (knex) {
	return knex.schema.dropTable("comments").dropTable("posts");
};
