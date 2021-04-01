//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import Prototypes from "prop-types";
//include bootstrap npm library into the bundle
import "bootstrap";

import "@fortawesome/fontawesome-free/css/all.min.css";

//include your index.scss file into the bundle
import "../styles/index.scss";

function SecondsCounter(props) {
	return (
		<div className="bigCounter">
			<div className="calendar ">
				<i className="far fa-clock"></i>
			</div>
			<div className="cinco">{props.digitalCinco % 10}</div>
			<div className="cuatro">{props.digitalCuatro % 10}</div>
			<div className="tres">{props.digitalTres % 10}</div>
			<div className="dos">{props.digitalDos % 10}</div>
			<div className="uno">{props.digitalUno % 10}</div>
		</div>
	);
}
SecondsCounter.prototypes = {
	digitalCinco: Prototypes.number,
	digitalCuatro: Prototypes.number,
	digitalTres: Prototypes.number,
	digitalDos: Prototypes.number,
	digitalUno: Prototypes.number
};

let counter = 0;
setInterval(function() {
	const cinco = Math.floor(counter / 10000);
	const cuatro = Math.floor(counter / 1000);
	const tres = Math.floor(counter / 100);
	const dos = Math.floor(counter / 10);
	const uno = Math.floor(counter / 1);
	console.log(cinco, cuatro, tres, dos, uno);
	counter++;
	ReactDOM.render(
		<SecondsCounter
			digitalUno={uno}
			digitalDos={dos}
			digitalTres={tres}
			digitalCuatro={cuatro}
			digitalCinco={cinco}
		/>,
		document.querySelector("#app")
	);
}, 100);
