import React from 'react';
import ReactDom from 'react-dom';
import PokemonInfo from './containers/PokemonInfo';

class App extends React.Component{
	render(){
		return (
			<div className='test'>
			<h2>WORKING</h2>
			<PokemonInfo evolvesTo="pokemon1" evolvesFrom="not null"/>
			</div>
		)
	}
}

ReactDom.render(<App/>, document.getElementById('app'))