import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const GameCard = (props) => {

	const [game, setGame] = useState(props.Game);
	const [textButton, setTextbutton] = useState("Show game");
	const [widthCard, setWidth] = useState("50%");

	var cardContain = {
	  borderColor: game.color,
	  boxShadow: "0px 2px 22px 1px " + game.color
	}
	var title = {
	  color: game.color
	}

	return (
			<div className="cardStyle">
					<div className="cardContain" style={cardContain}>
						<Link style={{textDecoration: "none"}} to={`/Games/${game._id}`}>
							<div className="title" style={title}>{game.name}</div>
							<div className="subTitle">{game.desc}</div> <br/>
							<div className="made"> Made with <strong> {game.engine} </strong> </div> <br/>
							<div className="gameImg">
								<img style={{width:"100%"}} src={game.image}/>
							</div><br/>
						</Link>
					</div>
			</div>
	);
}

export default GameCard;