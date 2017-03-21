import React from 'react';
import ReactDom from 'react-dom';

class App extends React.Component{
	render(){
		return (
			<div className='test'>
			<h2>WORKING</h2>
			</div>
		)
	}
}

ReactDom.render(<App/>, document.getElementById('app'))