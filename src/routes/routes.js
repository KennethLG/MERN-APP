const express = require("express");
const router = express.Router();
const game = require("../DB/game.js");

router.get("/", async (req, res)=> {
	const Games = await game.find();
	res.json(Games);
});

router.get("/:id", async (req, res) => {
	const {id} = req.params;
	const g = await game.findById(id);
	res.json(g);
});

router.post("/:id", async (req, res) => {
	const {reviews, newReview} = req.body;
	const {id} = req.params;
	var value = reviews;
	value.push(newReview);
	await game.updateOne({_id: id}, {
		$set: {
			reviews : value
		}
	})
	res.json("received");
});

module.exports = router;

