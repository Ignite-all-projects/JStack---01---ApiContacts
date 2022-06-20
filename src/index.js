const express = require("express");

const routes = require("./routes");

const app = express();

app.use(express.json()); // middlawere 1

app.use(routes);

app.listen(3000, () => console.log("Server started a t htpp://localhost:3000"));
