exports.up = function (knex) {
	return knex.schema.createTable("posts", (table) => {
		table.increments("id");
		table.string("title", 30).notNullable();
		table.integer("author_id").unsigned();
		table.string("content", 255).notNullable();
		table
			.foreign("author_id")
			.references("id")
			.inTable("comments")
			.onUpdate("CASCADE")
			.onDelete("CASCADE");
		table.timestamp("created_at").defaultTo(knex.fn.now());
		table.timestamp("updated_at").defaultTo(knex.fn.now());
	});
};
exports.down = function (knex) {
	return knex.schema.dropTable("posts").dropTable("users");
};
