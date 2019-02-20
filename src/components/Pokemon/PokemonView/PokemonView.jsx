import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Card, Label } from 'semantic-ui-react'

import { PokemonView as PokemonViewCss, PokemonViewHeader } from './PokemonView.module.scss'

class PokemonView extends Component {
  render() {
    // Check if the object is empty
    const noPokemon = Object.entries(this.props.pokemon).length === 0
      && this.props.pokemon.constructor === Object;

    if (noPokemon) {
      return (
        <Card className={PokemonViewCss}>
          <h3>No Pokemon yet!</h3>
        </Card>
      )
    } else {
      // Iterate over the Pokemon's abilities and generate a label for each.
      const abilitiesView = this.props.pokemon.abilities.map((ability, idx) => {
        return (
          // Using `idx` as a key is generally discouraged:
          // https://reactjs.org/docs/lists-and-keys.html#keys
          <Label key={idx}>
            {ability.ability.name}
          </Label>
        )
      });

      // Display some data about the Pokemon, and its abilities.
      return (
        <Card className={PokemonViewCss}>
          <Card.Content>
            <Card.Header className={PokemonViewHeader}>
              {this.props.pokemon.name}
            </Card.Header>
            <Card.Meta>
              Pokedex #{this.props.pokemon.id}
            </Card.Meta>
            <img
              src={this.props.pokemon.sprites.front_default}
              alt={`Sprite of ${this.props.pokemon.name}`}
            />
            <h4>Abilities</h4>
            {abilitiesView}
          </Card.Content>
        </Card>
      )
    }
  }
}

PokemonView.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.number,
    abilities: PropTypes.arrayOf(PropTypes.shape({
      ability: PropTypes.shape({
        name: PropTypes.string,
        url: PropTypes.string,
      })
    })),
    sprites: PropTypes.object,
  }),
}

export default PokemonView
