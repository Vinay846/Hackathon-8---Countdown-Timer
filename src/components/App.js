import React, { Component, useState, useEffect } from 'react';
import '../styles/App.css';

const App = () => {
	const [ timeLeft, setTimeLeft ] = useState();
  let clrinterval = null;
  const keydownhandler = (event) => {
    let val = Number(event.target.value);
    if(event.keyCode === 96){
      setTimeLeft(0);
    }
		else if (event.keyCode === 13 && Number(val)) {
      setTimeLeft(val);
		}
	};

	useEffect(
		() => {
			if (timeLeft > 0) {
				clrinterval = setTimeout(() => {
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
