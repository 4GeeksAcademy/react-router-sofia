import React, { useEffect, useContext }from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Navbar } from "../component/navbar.js"
import  { Cards }  from "../component/cards.js";
import { Context } from "../store/appContext";



//useContext se utiliza para acceder al objeto store y los actions de la aplicación que se han almacenado en el contexto Context, store y actions se ubican en flux
export const Home = () => {
	const{ store, actions } = useContext (Context)
	return (
	<div className="container">
		<h1 className="display-4 py-1 fw-bolder text-center">Characters</h1>

{/* les pasa un objeto people como prop, que es un objeto que representa un personaje de la aplicación.
 También se les pasa una type de valor "personas" y un id que es el índice de la tarjeta más uno */}
		<div className="row d-flex flex-column wrapScroll mb-3  "> 
		  
		  <div className="cards d-flex  ">
			{store.characters.map((people, index) => {
			  return (<div key={index} className="col-3"> <Cards object={people} type="personas" id={index + 1}/></div>)
			})}
		  </div>

		  <h1 className="display-4 py-1 fw-bolder text-center">planets</h1>

		  {/* <div className="cards d-flex  ">
			{store.planets.map((people, index) => {
			  return (<div key={index} className="col-3"> <Cards object={planets} type="planetas" id={index + 1}/></div>)
			})}
		  </div> */}
		</div>
	</div>
	);
}
 