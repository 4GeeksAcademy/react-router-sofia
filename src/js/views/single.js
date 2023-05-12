import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";//importamos el hooks useParams
import { Context } from "../store/appContext";
//import { clean } from "gh-pages";


//aqui iria el detalle de cada card 

export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	useEffect ( ()=>{
		// clean.store //aqui debo colocar un clean para que limpie el estado anterior
		actions.fetchCharacter(params.theid)
		console.log(store)
	},[])
	
	return (
<div className="jumbotron" style={{padding:"100px"}}>

  <span style={{color:"white",textAlign:"right"}}> 
	
	<h2>{store.character.name}</h2>
	<br/>
	<p>	{store.character.birth_year}</p>
	<br/>
	<p>	{store.character.hair_color}</p>

  </span> 
			<hr className="my-4" />

			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
</div>
	);
};

Single.propTypes = {
	match: PropTypes.object //object son los elementos que hay dentro del array de fetch
};
