import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1"><img src="https://www.freepnglogos.com/uploads/star-wars-logo-31.png" 
				style={{height:"70px",width:"100px",marginLeft:"50px"}}/>
				
				</span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary" style={{marginRight:"50px"}}>Favorites
					</button>
				</Link>
			</div>
		</nav>
	);
};
