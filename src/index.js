const express = require("express");
const path = require("path");
const config = require("./config.js");
require("./DB/connection");

const app = express(); // constuir app express
//Middlewares-
app.use(express.json());

//Routes
app.use("/api/games", require("./routes/routes.js")); // aqui irá la api de la pagina, donde se enviará y recibirá datos

console.log(path.join(__dirname, "../dist"));
app.use(express.static(path.join(__dirname, "../dist")));

app.listen(config.PORT, ()=> {
	console.log(`server started on port ${config.PORT}`);
});