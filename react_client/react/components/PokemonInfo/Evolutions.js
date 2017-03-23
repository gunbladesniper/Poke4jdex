import React from 'react';

function Types(props){
 return(
 	<div>
 		{props.evolveTo && <div className="evolve-to">Evoles To</div>}
 		{props.evolveFrom && <div className="evolve-from">Evolves from</div>}
 	</div>
 )
}

export default Types;