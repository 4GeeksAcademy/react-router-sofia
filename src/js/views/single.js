import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";//importamos el hooks useParams
import { Context } from "../store/appContext";


//aqui iria el detalle de cada card 

export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	useEffect (()=>{
		actions.fetchCharacter(params.theid)
	},[])
	
	return (
		<div className="jumbotron">

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
