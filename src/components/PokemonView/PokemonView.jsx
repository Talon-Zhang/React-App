import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './PokemonView.css'
import {Button} from "semantic-ui-react";
import {Link} from "react-router-dom";

class PokemonView extends Component {
  render() {
    // // Check if the object is empty
    // const noPokemon = Object.entries(this.props.pokemon).length === 0
    //   && this.props.pokemon.constructor === Object;
    //
    // if (noPokemon) {
    //   return (
    //     <Card className={PokemonViewCss}>
    //       <h3>No Pokemon yet!</h3>
    //     </Card>
    //   )
    // } else {
    //   // Iterate over the Pokemon's abilities and generate a label for each.
    //   const abilitiesView = this.props.pokemon.abilities.map((ability, idx) => {
    //     return (
    //       // Using `idx` as a key is generally discouraged:
    //       // https://reactjs.org/docs/lists-and-keys.html#keys
    //       <Label key={idx}>
    //         {ability.ability.name}
    //       </Label>
    //     )
    //   });
      const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.props.index}.png`;
      const link = `/detail/${this.props.index}`
      return (
          <span>
              <Link to={link}>
            <img src={url} />
            </Link>
          </span>
      )
  }
}

PokemonView.propTypes = {
    index: PropTypes.number
}

export default PokemonView
