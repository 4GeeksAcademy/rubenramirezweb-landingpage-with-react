import React from "react";
import Navbar from "./Navbar";
import Card from "./Card";
import Footer from "./Footer";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Jumbotron from "./Jumbotron";


//create your first component
const Home = () => {
	return (
		<div className="container-fluid">
			<Navbar />
			<div className="container">
				<Jumbotron />
				
				<div className="row justify-content-between">
					<div className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
						<Card />
					</div>
					<div className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
						<Card />
					</div>
					<div className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
						<Card />
					</div>
					<div className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
						<Card />
					</div>
				</div>
			</div>
			<Footer />
		</div >

	);
};

export default Home;