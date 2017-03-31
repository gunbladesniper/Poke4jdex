import React from 'react';

function Types(props){
 return(
 	<div className='type-header'>
 	{props.pokemon.type1 !== 'null' && <div className='type-div'>{props.pokemon.type1}</div>}
 	{props.pokemon.type2 !== 'null' && <div className='type-div'>{props.pokemon.type2}</div>}
 	</div>
 )
}

export default Types;

// var srcArray=[];

// images.forEach(function(image){
// 	srcArray.push(image.currentSrc);
// })

// console.log(srcArray);
