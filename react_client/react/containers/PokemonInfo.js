import React from 'react';
import Types from '../components/PokemonInfo/Types.js';
import Evolutions from '../components/PokemonInfo/Evolutions.js';
import Stats from '../components/PokemonInfo/Stats.js';
import EggGroups from '../components/PokemonInfo/EggGroups.js';

function PokemonInfo(props){
	return (
		<div className='info-holder'>
			<span>{props.pokemon.name}</span>
			<img src={`images/${props.pokemon.name.toLowerCase()}.png`}/>
			<Types pokemon={props.pokemon}/>
			{props.pokemon.evolvesTo && props.pokemon.evolvesTo!== 'null' && <Evolutions evolvesTo ={props.pokemon.evolvesTo} pokemon={props.pokemon}/>}
			{props.pokemon.evolvesFrom && props.pokemon.evolvesFrom !== 'null' && <Evolutions evolvesFrom={props.pokemon.evolvesFrom} pokemon={props.pokemon}/>}
			<Stats pokemon={props.pokemon} />
			<EggGroups pokemon={props.pokemon} />
		</div>
	)
}


export default PokemonInfo;