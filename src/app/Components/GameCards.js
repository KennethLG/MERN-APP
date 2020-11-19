import React, { useState, useEffect } from "react";
import GameCard from "./GameCard.js";

var cardContainerStyle = {
	width:"100%",
	overflow: "auto",
	paddingTop: "32px",
	paddingBottom: "32px"
}

const GameCards = (props) => {
	const  [Games, setGames] = useState([]);

	useEffect(()=> {
		getGames();
	}, [Games]);

	async function getGames() { // obtener datos de la api
		const data = await fetch("/api/games")
		const games = await data.json();
		setGames(games)
	}
	return Games.map(g => <GameCard style={cardContainerStyle} Game={g}/>);
}

export default GameCards;