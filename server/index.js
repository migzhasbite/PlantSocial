const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");
const morgan = require("morgan");

const postsRoutes = require("./routes/postsRoutes");

require("dotenv").config();
const port = process.env.PORT || process.argv[2] || 8080;

app.use(cors());
app.use(express.json());
app.use("/static", express.static("public"));
app.use(morgan("dev"));

app.use("/posts", postsRoutes);

app.listen(port, () => {
	console.log(`Server Started on http://localhost:${port}`);
	console.log("Press CTRL + C to stop server");
});

// // const usersRoutes = require("./routes/usersRoutes"); //Users for future build
// const postsRoutes = require("./routes/postsRoutes");
// // const commentsRoutes = require("./routes/commentsRoutes"); //Comments for future build

// require("dotenv").config();
// const port = process.env.PORT || process.argv[2] || 8080;

// app.use(cors());
// app.use(express.json());
// app.use("/static", express.static("public"));

// // app.use("/users", usersRoutes); //Users for future build
// app.use("/posts", postsRoutes);
// // app.use("/comments", commentsRoutes); //Comments route for future build

// app.use(morgan("dev"));

// app.listen(port, () => {
// 	console.log(`Server Started on http://localhost:${port}`);
// 	console.log("Press CTRL + C to stop server");
// });
