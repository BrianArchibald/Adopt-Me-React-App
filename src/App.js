import React from "react";
import { render } from 'react-dom';
import pf from 'petfinder-client';

import Pet from "./Pet";

const petfinder = pf({
	key: process.env.API_KEY,
	secret: process.env.API_SECRET
});


class App extends React.Component {
	componentDidMount() {
		const promise = petfinder.breed.list({ animal: 'dog' })

		promise.then(console.log, console.error);
	}

	render() {
		// return React.createElement('div', {}, [
		// 	React.createElement(
		// 		'h1', 
		// 		{ onClick: this.handleTitleClick }, 
		// 		'Adopt Me!'
		// 		),
		// 	React.createElement(Pet, {
		// 		name: 'Luna',
		// 		animal: 'dog',
		// 		breed: 'Havenese'
		// 	}),
		// 	React.createElement(Pet, {
		// 		name: 'Pepper',
		// 		animal: 'bird',
		// 		breed: 'Cockatiel'
		// 	}),
		// 	React.createElement(Pet, {
		// 		name: 'Doink',
		// 		animal: 'cat',
		// 		breed: 'Mixed'
		// 	})
		// ])

		return(
			<div>
				<h1>Adopt Me</h1>
				<Pet name="Luna" animal="dog" breed="Havenese" />
				<Pet name="Pepper" animal="bird" breed="Cockatiel" />
				<Pet name="Doink" animal="cat" breed="Mixed" />
			</div>
		);
	}
}

render(<App />, document.getElementById('root'))