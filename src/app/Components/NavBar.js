import React from "react";
import {
	BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const NavBar = ()=> {
	return(
		<div className="navbar">
			<Link className="linkNav" to="/">Home</Link>
			<Link className="linkNav" to="/Games">Games</Link>
		</div>
	) 
}

export default NavBar;