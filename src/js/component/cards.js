import React,{ useEffect,useState,useContext } from "react";
import { BrowserRouter, Link, Route, Routes, useParams } from "react-router-dom";
import "../../styles/demo.css";
import { Context } from "../store/appContext"; //este archivo es appContext. aqui tenemmos el useEffect de los fetch
import { object } from "prop-types";




export const Cards = (props) => {
  const { name } = useParams();
  const { store, setStore}= useContext(Context);
  const [single,setSingle] = useState({});
  

  useEffect(() => {
    if (name) {
      setSingle(props.object.filter((object) => object.name === name));
    }
  });

  
   return ( 
   <div className="card" style={{width: "18rem"}}>
   <img 
    src={"https://starwars-visualguide.com/assets/img/characters/" + props.id +".jpg"}
      className="card-img-top"
      style={{height:"100%", width: "100%"}}
      alt="..."/>

   <div className="card-body">
     <h5 className="card-title">Card title</h5>
     <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
     {/* aqui tendriamos que colocar el link con la infomacion de cada personaje.*/}
     <Link to="/demo"> 
				<button className="btn btn-primary">link informacion de personaje</button>
			</Link>
   </div>
 </div>

 ////div de planetas

    );

}

