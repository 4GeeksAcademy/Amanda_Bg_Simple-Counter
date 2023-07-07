import React, { useState } from "react";
import PropTypes from "prop-types";


//create your first component
const Counter = (props) => {
	return (
	   <div className="containerCounter">
		  <div className="number"><i className="fa-solid fa-clock"></i></div>
		  <div className="number">{props.sixthNumber}</div>
		  <div className="number">{props.fifthNumber}</div>
		  <div className="number">{props.fourthNumber}</div>
		  <div className="number">{props.thirdNumber}</div>
		  <div className="number">{props.secondNumber}</div>
		  <div className="number">{props.firstNumber}</div>
	   </div>
	)
 }
 Counter.propTypes = {
	sixthNumber: PropTypes.number,
	fifthNumber: PropTypes.number,
	fourthNumber: PropTypes.number,
	thirdNumber: PropTypes.number,
	secondNumber: PropTypes.number,
	firstNumber: PropTypes.number,
 }
 	
 export default Counter;





