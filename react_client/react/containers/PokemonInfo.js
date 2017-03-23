import React from 'react';
import Types from '../components/PokemonInfo/Types.js';
import Evolutions from '../components/PokemonInfo/Evolutions.js';
import Stats from '../components/PokemonInfo/Stats.js';
import EggGroups from '../components/PokemonInfo/EggGroups.js';

function PokemonInfo(props){
	return (
		<div className='info-holder'>
			<Types />
			{props.evolvesTo && props.evolvesTo!== 'null' && <Evolutions evolveTo ='thing'/>}
			{props.evolvesFrom && props.evolvesFrom !== 'null' && <Evolutions evolveFrom='thing'/>}
			<Stats />
			<EggGroups />
		</div>
	)
}


export default PokemonInfo;