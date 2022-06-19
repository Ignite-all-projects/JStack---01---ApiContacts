const express = require("express");

const routes = require("./routes");

const app = express();

app.use(routes); // middlawere 4

app.listen(3000, () => console.log("Server started a t htpp://localhost:3000"));
