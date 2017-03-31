import React from 'react';

function Types(props){
 return(
 	<div>
 		{props.evolvesTo && <div className="evolve-to">{props.pokemon.name}</div>}
 		{props.evolvesFrom && <div className="evolve-from">{props.pokemon.name}</div>}
 	</div>
 )
}

export default Types;