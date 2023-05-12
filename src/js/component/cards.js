import React,{ useEffect,useState,useContext } from "react";
import { BrowserRouter, Link, Route, Routes, useParams } from "react-router-dom";
import "../../styles/demo.css";
import { Context } from "../store/appContext"; 
import { Single } from "../views/single";
import { object } from "prop-types";

//este archivo es appContext. aqui tenemmos el useEffect de los fetch
//import { object } from "prop-types";





export const Cards = (props) => {
  const { name } = useParams();
  const { store, actions }= useContext(Context);
  const [single,setSingle] = useState({}); //el hook de estado "useState" para almacenar un objeto "single"(descripcion particular de cada card)
  

  useEffect(() => { // hook de efecto "useEffect" para actualizar el estado del objeto "single" cuando el valor de "name" cambia.
    if (name) {
      setSingle(props.object.filter((object) => object.name === name));//sa el método "filter" de JavaScript para encontrar el objeto  en la matriz "props.object" que
                                                                      // tiene el nombre igual al valor de "name" (obtenido a traves del hook "useParams").
                                                                      //EL METODO "FILTER" devuelve una nueva matriz con todos los elementos que cumplen la condicion,
                                                                      //especificada en una funcion de llamada ("object.name === name")
    }// el resultado de filter se asigna al estado "single" el cual almacena un objeto que coincide con la url para informacion detallada sobre el objeto en una pagina separada
  });

  let type = ""; //inicializa en cadena vacia
  switch (props.type) { //switch para comparar el valor de la propiedad "type" del objeto"props" con una seria de casos (case)
    case "personas"://en el caso de q el valor "type" sea igual a "personas" se asigna la cadena characters
      type = "characters";//de lo contrario seguira siendo una cadena vacia

   return (  // characters

    
   <> <div className="container">
      <div className="card" style={{ width: "18rem",borderRadius:"20px" }}>
       <img src={"https://starwars-visualguide.com/assets/img/characters/" + props.id + ".jpg"}

         className="card-img-top"
         style={{ height: "100%", width: "100%",borderRadius:"20px" }}
         alt="..." />

       <div className="card-body" style={{fontSize:"12px"}}>
         <h5 className="card-title">{props.object.name} </h5>
         <p className="card-text"><b>Gender:</b> {props.object.gender}</p>
         <p className="card-text"><b>Hair color:</b> {props.object.hair_color}</p>
         <p className="card-text"><b>Eye color:</b> {props.object.eye_color}</p>
         <p className="card-text"><b>Height</b> {props.object.height}</p>


         {/* aqui tendriamos que colocar el link con la infomacion de cada personaje.*/}
        <Link to={`/single/${props.id}`}>     
           <button className="btn btn-primary"
           style={{background:"#575957"}}>link informacion de personaje</button> 
         </Link> 
         
       </div>
     </div> 
     </div></>

    )
 }
}

 

