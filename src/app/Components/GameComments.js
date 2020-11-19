import React, {useState, useEffect} from "react";

const GameComments = (props) => {
	return (
		props.Review.com.map(e => 
			<div className="commentContainer">
				<p className="textComment">{e}</p>
			</div>
		)
	);
}

export default GameComments;
