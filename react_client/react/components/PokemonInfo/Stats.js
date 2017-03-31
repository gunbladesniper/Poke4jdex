import React from 'react';

function Stats(props){
 return(
 	<div className="stats">
 		<span className='stat-header'>Base Stats</span>
	 		<div className='stat-container'>{props.pokemon.baseHP}</div>
	 		<div className='stat-container'>{props.pokemon.baseATK}</div>
	 		<div className='stat-container'>{props.pokemon.baseDEF}</div>
	 		<div className='stat-container'>{props.pokemon.baseSPA}</div>
	 		<div className='stat-container'>{props.pokemon.baseSPD}</div>
	 		<div className='stat-container'>{props.pokemon.baseSPE}</div>
 	</div>
 )
}

export default Stats;