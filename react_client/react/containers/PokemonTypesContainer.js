import React from 'react';

class PokemonType extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return (
			<div className='type-button'>
				{this.props.type.name}
			</div>
		)
	}
}

export default PokemonType;