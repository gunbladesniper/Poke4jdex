import React from 'react';
import Types from '../components/PokemonInfo/Types.js';
import Evolutions from '../components/PokemonInfo/Evolutions.js';
import Stats from '../components/PokemonInfo/Stats.js';
import EggGroups from '../components/PokemonInfo/EggGroups.js';

function PokemonInfo(props){
 var weirdNames = {
 	28: 'nidoranf',
 	31: 'nidoranm',
 	82: 'farfetch_d',
 	121: 'mr._mime'
 };

var pokemonName;

 if (weirdNames[props.dex]){
 	pokemonName = weirdNames[props.dex];
 }else{
 	pokemonName = props.pokemon.name.toLowerCase();
 }

	return (
		<div className='info-holder' >
			<span className='pokemon-name'>{props.pokemon.name}</span>
			<img className='pokemon-image' src={`images/${pokemonName}.png`}/>
			<Types pokemon={props.pokemon}/>
			{props.pokemon.evolvesTo && props.pokemon.evolvesTo!== 'null' && <Evolutions evolvesTo ={props.pokemon.evolvesTo} pokemon={props.pokemon}/>}
			{props.pokemon.evolvesFrom && props.pokemon.evolvesFrom !== 'null' && <Evolutions evolvesFrom={props.pokemon.evolvesFrom} pokemon={props.pokemon}/>}
			<Stats pokemon={props.pokemon} />
			<EggGroups pokemon={props.pokemon} />
		</div>
	)
}


export default PokemonInfo;