import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";

const GameCon = () => {
	const [game, setGame] = useState(false);
	const [rev, setRev] = useState({com: "", stars: 0});
	let {id} = useParams();

	useEffect(()=> {
		getGame();
	});

	async function getGame() {
		const res = await fetch(`/api/games/${id}`);
		const data = await res.json();
		setGame(data);
	}

	async function submit(e) {
		e.preventDefault();
		const x = await fetch(`/api/games/${id}`, {
			method: "POST",
			body: JSON.stringify({
				reviews: game.reviews,
				newReview: {
					comment: rev.com,
					rating : rev.stars
				}
			}),
			headers: {
				"Accept":"application/json",
				"Content-Type":"application/json"
			}
		});
		const rec = await x.json();
		console.log(rec);
		setRev({com: "", stars: 0});
		document.getElementById("texta").value = "";
	}

	function onChange(e) {
		setRev({com: e.target.value, stars: rev.stars});
	}

	function getStars() { // <span class="fa fa-star checked"></span>
		return (
			<div >
				<span onClick={sendStars} id="1" onMouseLeave={starB} onMouseEnter={starY} className="fa fa-star"/>
				<span onClick={sendStars} id="2" onMouseLeave={starB} onMouseEnter={starY} className="fa fa-star"/>
				<span onClick={sendStars} id="3" onMouseLeave={starB} onMouseEnter={starY} className="fa fa-star"/>
				<span onClick={sendStars} id="4" onMouseLeave={starB} onMouseEnter={starY} className="fa fa-star"/>
				<span onClick={sendStars} id="5" onMouseLeave={starB} onMouseEnter={starY} className="fa fa-star"/>
			</div>
		)
	}

	function getRating(n) {
		var classes = [];
		for(var i = 0; i < 5; i++) {
			if (i < n)classes.push("fa fa-star checked"); 
			else classes.push("fa fa-star black");
		}

		return classes.map(e => (
			<div className={e}/>
		))
	}

	function getStarsRating(n) {
		var classes = [];
		var sum = 0;
		for (var i = 0; i < game.reviews.length; i++) {
			sum += game.reviews[i].rating;
		}
		sum = sum/game.reviews.length;
		for(var i = 0; i < 5; i++) {
			if (i < sum) classes.push("fa fa-star checked"); 
			else classes.push("fa fa-star black");
		}

		return (classes.map(e => (
			<div className={e}/>
		)))
	}

	function starY(e) {
	}

	function starB(e) {
		for (var i = 0; i < document.getElementsByTagName("SPAN").length; i++) {
			document.getElementsByTagName("SPAN")[i].className="fa fa-star";
		}
	}

	function sendStars(e) {
		var l = parseInt(e.target.id);
		for (var i = 0; i < document.getElementsByTagName("SPAN").length; i++) {
			document.getElementsByTagName("SPAN")[i].className="fa fa-star";
		}
		for(i =0; i < l; i++) {
			document.getElementsByTagName("SPAN")[i].className="fa fa-star checked";
		}
		setRev(rev => ({...rev, stars : l}));
	}

	var gameStyle = {
		borderLeftColor: game.color
	}

	var border = {
		borderColor: game.color,
	  boxShadow: "0px 2px 10px 1px " + game.color
	}

	if (!game) {
		return "loading...";
	}

	return (
		<div className="gameBody">
			<div className="col-1">
				<div style={gameStyle} className="gameTitle">
					<p>{game.name}<br/>{getStarsRating()}</p>
				</div>
				<div><p className="gameDesc">{game.text}</p></div>
				<div style={border} className="gameReviewsContainer">
					<div style={{width:"90%", margin:"auto", padding:"16px"}}>
						<div style={gameStyle} className="gameTitleReviews"><p>Reviews</p></div>
						<div style={gameStyle} className="gameReviews">
							{game.reviews.map(e => (
								<div style={{padding: "8px"}}>
									<div style={border} className="gameComment">
										<p>{e.comment}</p>
										<p>{getRating(e.rating)}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
				<div style={border} className="gameReviewsContainer">
					<div style={{width:"90%", margin:"auto", padding:"16px"}}>
						<div style={gameStyle} className="gameTitleReviews"><p>Send us your review!</p></div>
						<div style={gameStyle} className="gameReviews">
							<form className="gameComment" onSubmit={submit}>
								<textarea id="texta" name="com" className="wc" onChange={onChange} placeholder="Write a comment"/>
								<div style={{fontSize: "32px"}}>{getStars()}</div><br/>
								<button action="submit" className="commentButton">Send Review</button>
							</form>
						</div>
					</div>
				</div>
			</div>
			<div className="col-2">
				<img className="gameImg" src={game.image}/>
				{game.images.map(e => (
					<img className="gameImg" src={e}/>
				))}
			</div>
		</div>
	);
}

export default GameCon;
