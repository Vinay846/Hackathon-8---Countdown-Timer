import React, { Component, useState, useEffect } from 'react';
import '../styles/App.css';

const App = () => {
	const [ timeLeft, setTimeLeft ] = useState(0);

  const keydownhandler = (event) => {
		if (event.keyCode === 13) {
      setTimeLeft(event.target.value);
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
