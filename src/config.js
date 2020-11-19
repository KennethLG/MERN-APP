const dotenv = require("dotenv");
dotenv.config();

module.exports = {
	PORT: process.env.PORT,
	MONGO_DB: process.env.MONGO_DB,
	MONGO_USER: process.env.MONGO_USER,
	MONGO_PSW: process.env.MONGO_PSW
}