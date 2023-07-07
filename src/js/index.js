//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import Counter from "./component/counter";

//render your react application
let counter = 0

setInterval(() => {
    const sixth = Math.floor(counter / 100000) % 10;
    const fifth = Math.floor(counter / 10000) % 10;
    const fourth = Math.floor(counter / 1000) % 10;
    const third = Math.floor(counter / 100) % 10;
    const second = Math.floor(counter / 10) % 10;
    const first = Math.floor(counter / 1) % 10;
    counter++
    
    ReactDOM.render(
        <div>
            <Counter firstNumber={first} secondNumber={second} thirdNumber={third} fourthNumber={fourth} fifthNumber={fifth} sixthNumber={sixth}/>
        </div>
    
    , document.querySelector("#app"));

}, 1000);