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
					<button className="btn btn-primary" style={{marginRight:"50px"}}> Fovorites
					{/* <li className="nav-item dropdown">
						<a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#"  aria-expanded="false" style={{color:"white"}}>Favorites</a>
						<ul className="dropdown-menu">
							<li><a className="dropdown-item" href="#">Action</a></li>
							<li><a className="dropdown-item" href="#">Another action</a></li>
							<li><a className="dropdown-item" href="#">Something else here</a></li>
							<li><a className="dropdown-item" href="#">Separated link</a></li>
						</ul>
					</li> */}
					</button>
				</Link>
			</div>
		</nav>
	);
};
