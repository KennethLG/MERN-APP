const mongoose = require("mongoose");
const {Schema} = mongoose;

const gameS = new Schema({
	name: String,
	desc: String,
	engine: String,
	text: String,
	image: String,
	colors: String,
	reviews: Array,
	images: Array
})

module.exports = mongoose.model("games", gameS);