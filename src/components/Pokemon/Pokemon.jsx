import React, { Component } from 'react'
import { Button, Input } from 'semantic-ui-react'
import axios from 'axios'

import PokemonView from './PokemonView/PokemonView'

import styles from './Pokemon.scss'

class Pokemon extends Component {

  constructor() {
    super();

    this.state = {
      value: '',
      pokemon: {},
    };

    this.baseUrl = 'https://pokeapi.co/api/v2/pokemon/';

    this.inputChangeHandler = this.inputChangeHandler.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    // Form the URL
    let url = `${this.baseUrl}${this.state.value}`;

    // GET some data back!
    axios.get(url).then((response) => {
      console.log(response);

      this.setState({
        pokemon: response.data
      });

      console.log(this.state.pokemon);
    }).catch((error) => {
      console.log(error);
    });
  }

  inputChangeHandler(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div className="Pokemon">
        <h1 className="Pokemon-header">Let's GET us a Pokemon!</h1>

        <Input
          onChange={this.inputChangeHandler}
          label='https://pokeapi.co/api/v2/pokemon/'
          placeholder='Pokemon # here!'
          value={this.state.value}
        />
        <Button onClick={this.clickHandler}>
          GET
        </Button>

        <PokemonView pokemon={this.state.pokemon} />
      </div>
    )
  }

}

export default Pokemon
