import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import  { Character }  from "../component/character.js";
import { Navbar } from "../component/navbar.js"




export const Home = () => {
	return (
	<div className="text-center mt-5">

		<Navbar/>
		<Character/>
		
		
		<a href="#" className="btn btn-success">
			If you see this green button, bootstrap is working
		</a>
	</div>
	);
}
