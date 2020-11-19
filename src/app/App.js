import React, { useState, useEffect } from 'react';
import "./App.css";

import GameCards 	from "./Components/GameCards.js";
import NavBar 		from "./Components/NavBar.js";
import Body 		from "./Components/Body.js";
import GameCon  	from "./Components/Games/GameCon.js";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const App = () => {

	return (
		<Router>
		  <div className="App">
		  	<NavBar />
		  	<Switch>
			  	<Route path="/Games" exact>
				    <div className="tabGames">
				    	<GameCards/>
			    	</div>
			    </Route>

			    <Route path="/" exact>
			    	<div className="cabeza">
				      <p className="PTitle">Team Clover</p>
				      <Body/>
				    </div>
			    </Route>

			    <Route path="/Games/:id">
			    	<GameCon/>
			    </Route>
			  </Switch>
			</div>
		</Router>
	);
}
export default App;