import React from "react";
import { Link } from "react-router-dom";
import "../../styles/demo.css";




export const Character = () => {
   return ( 
   <div className="card" style={{width: "18rem"}}>
   <img src="..." className="card-img-top" alt="..."/>
   <div className="card-body">
     <h5 className="card-title">Card title</h5>
     <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
     {/* aqui tendriamos que colocar el link con la infomacion de cada personaje.*/}
     <Link to="/demo"> 
				<button className="btn btn-primary">link informacion de personaje</button>
			</Link>
   </div>
 </div>

    );

}
