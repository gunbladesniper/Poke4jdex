import React from 'react';

function EggGroups(props){
 return(
 	<div className='egg-groups'>
 	{props.pokemon.eggGroup1 !== 'null' && <div className='egg-div'>{props.pokemon.eggGroup1}</div>}
 	{props.pokemon.eggGroup2 !== 'null' && <div className='egg-div'>{props.pokemon.eggGroup2}</div>}
 	</div>
 )
}

export default EggGroups;