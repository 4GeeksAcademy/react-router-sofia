import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";


import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Character } from "./component/character";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}> 
			{/* todo lo que se coloque dentro de browserRouter,como por ejemplo Navbar, av a persistir en la vista de la interfaz independientemente de la ruta, se vera
			en todas las rutas */}
				<ScrollToTop>
					<Navbar/>
					
				
					<Routes>
						{/* se coloca la ruta en path="/" en el cual cuando entremos en esa ruta especificamente nos lleva al componente que deseamos, nombrandolo en 
						( element={<Home /> podria ser cualquier otro componente}) Le dice a React que muestre la única <Route> que coincide con la URL mostrada. */}
						<Route path="/" element={<Home />} />  
						<Route path="/demo" element={<Demo />} />
						<Route path="/single/:theid" element={<Single />} /> 
						<Route path="*" element={<h1>Not found!</h1>} /> 
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
