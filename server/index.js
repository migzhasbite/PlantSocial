const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");
const morgan = require("morgan");

// const usersRoutes = require("./routes/usersRoutes");

require("dotenv").config();
const port = process.env.PORT || process.argv[2] || 8080;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// app.use("/users", usersRoutes);

app.use(morgan("dev"));

app.listen(port, () => {
	console.log(`Server Started on http://localhost:${port}`);
	console.log("Press CTRL + C to stop server");
});
