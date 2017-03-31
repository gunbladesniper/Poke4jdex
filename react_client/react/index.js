import React from 'react';
import ReactDom from 'react-dom';
import PokemonInfo from './containers/PokemonInfo';
import axios from 'axios';

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      currentPokemon: null,
      allPokemon: []
    }
  }

  componentDidMount(){
    axios.get('/pokemon')
    .then((response)=>{
      this.setState({
        allPokemon: response.data
      });
      console.log(this.state.allPokemon)
    })
    .catch((err)=>{
      console.log(err, 'error');
    })
  }
  render(){
    return (
      <div className='test'>
      <h2>WORKING</h2>
        <div className='pokeinfo-flex'>
        {this.state.allPokemon.map((pokemon, index)=>{
          //pokemon._fields[0].properties = object with pokemon data
          return <PokemonInfo key={index} pokemon={pokemon._fields[0].properties}/>
        })}
        </div>
      </div>
    )
  }
}

ReactDom.render(<App/>, document.getElementById('app'))