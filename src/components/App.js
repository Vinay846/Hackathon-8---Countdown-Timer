import React, { Component, useState, useEffect } from 'react';
import '../styles/App.css';

const App = () => {
  const [ timeLeft, setTimeLeft ] = useState();
  
  const keydownhandler = (event) => {

    if(event.keyCode === 96){
      setTimeLeft(0);
    }
		else if (event.keyCode === 13 && Number(event.target.value)) {
      setTimeLeft(val);
		}
	};

	useEffect(
		() => {
			if (timeLeft > 0) {
				const clrinterval = setTimeout(() => {
					setTimeLeft(timeLeft - 1);
        }, 1000);
        return () => clearInterval(clrinterval);
			}
		},
		[ timeLeft ]
	);

	return (
		<div className="wrapper">
			<div id="whole-center">
				<h1>
					Reverse countdown for<input id="timeCount" onKeyDown={keydownhandler} /> sec.
				</h1>
			</div>
			<div id="current-time">{timeLeft}</div>
		</div>
	);
};

export default App;
