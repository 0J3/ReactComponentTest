import React from 'react';
import './App.css';
import ReactComponents from '@norathefurry/reactcomponents';

const App = () => {
	console.log(ReactComponents.UwUify.uwuifyWithFaces('hello world'));

	return (
		<div className="App">
			<header className="App-header">
				<p>
					Components:
					<br />
					ReactComponents.UwUify:
					<ReactComponents.UwUify>
						So this is an example of the ReactComponents.UwUify Element
					</ReactComponents.UwUify>
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
