import React from 'react';
import ReactDom from 'react-dom';
import { FormGroup, FormControl , Button} from 'react-bootstrap';
import PokemonInfo from './containers/PokemonInfo';
import PokemonType from './containers/PokemonTypesContainer';
import axios from 'axios';

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      currentPokemon: null,
      allPokemon: [],
      allTypes: [],
      searchTerm: ''
    }
  }

  componentDidMount(){
    axios.get('/pokemon')
    .then((response)=>{
      this.setState({
        allPokemon: response.data
      });
    })
    .catch((err)=>{
      console.log(err, 'error');
    });

    axios.get('/types')
    .then((response)=>{
      this.setState({
        allTypes: response.data
      });
      console.log(this.state.allTypes)
    })
    .catch((err)=>{
      console.log(err, 'error');
    })
  }

  handleChange(e){
    this.setState({currentPokemon: null});
    this.setState({searchTerm: e.target.value});
    console.log(this.state.searchTerm)
  }
  handleSubmit(e){
    e.preventDefault();
    this.setState({
      currentPokemon: this.state.searchTerm
    })
    console.log(this.state.currentPokemon);
  }

  render(){
    return (
      <div className='test'>
        <div className='poke-header'>
          <span>Poke4jDex</span>
        </div>
        <div className='poke-types'>
          {this.state.allTypes.map((type, index)=>{
            return <PokemonType key={index} type={type._fields[0].properties} />
          })}
        </div>
        <div className='pokeinfo-flex'>
        {!this.state.currentPokemon && this.state.allPokemon.map((pokemon, index)=>{
          //pokemon._fields[0].properties = object with pokemon data
          return <PokemonInfo key={index} dex={index} pokemon={pokemon._fields[0].properties}/>
        })}
        {this.state.currentPokemon && this.state.allPokemon.filter((pokemon, index)=>{
          return pokemon._fields[0].properties.name.toLowerCase() === this.state.currentPokemon.toLowerCase();
        }).map((pokemon, index)=>{
          //pokemon._fields[0].properties = object with pokemon data
          return <PokemonInfo key={index} dex={index} pokemon={pokemon._fields[0].properties}/>
        })}
        </div>
        <div className='search-bar'>
          <form>
            <FormControl
              type='text'
              value={this.state.searchTerm}
              onChange={this.handleChange.bind(this)}
              onSubmit={this.handleSubmit.bind(this)}
            />
            <Button
            type='submit'
            onClick={this.handleSubmit.bind(this)}
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    )
  }
}

ReactDom.render(<App/>, document.getElementById('app'))