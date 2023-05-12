import React,{ useEffect,useState,useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const {store, actions }= useContext(Context);
	return (
		<nav className="navbar navbar-light mb-3" style={{background:"#9AA09A",height:"110px"}}>
			<Link to="/">
				<span className="navbar-brand mb-0">
					<img src="https://www.freepnglogos.com/uploads/star-wars-logo-31.png" 
					style={{height:"100px",width:"150px",marginLeft:"30px"}}/> 
				</span>

			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary" style={{marginRight:"50px"}}> Fovorites</button>
				</Link>

					{/* <Link to="/character">
  <button className="btn btn-primary">Characters</button>
</Link> */}

					{/* <li className="nav-item dropdown">
						<a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#"  aria-expanded="false" style={{color:"white"}}>Favorites</a>
						<ul className="dropdown-menu">
							<li><a className="dropdown-item" href="#">Action</a></li>
							<li><a className="dropdown-item" href="#">Another action</a></li>
							<li><a className="dropdown-item" href="#">Something else here</a></li>
							<li><a className="dropdown-item" href="#">Separated link</a></li>
						</ul>
					</li> */}
					
			</div>
		</nav>
	);
};
