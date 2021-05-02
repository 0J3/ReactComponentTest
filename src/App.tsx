import React from 'react';
import './App.css';
import ReactComponents from '@norathefurry/reactcomponents';
// import { YearsSince } from '@norathefurry/reactcomponents';
import YearsSince from '@norathefurry/reactcomponents/js/YearsSince';

const App = () => {
	console.log(ReactComponents.UwUify.uwuifyWithFaces('hello world'));

	return (
		<div className="App">
			<header className="App-header">
				<p>
					Components:
					<br />
					ReactComponents.UwUify (useEmojis=true):&nbsp;
					<ReactComponents.UwUify useEmojis={true}>
						So this is an example of the ReactComponents.UwUify Element
					</ReactComponents.UwUify>
					<br />
					ReactComponents.YearsSince (time=0):&nbsp;
					<YearsSince time={0}>a</YearsSince>
				</p>
				{/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
			</header>
		</div>
	);
};

export default App;
