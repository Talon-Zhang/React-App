import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './PokemonView.scss'
import {Link} from "react-router-dom";

class PokemonView extends Component {
  render() {
      const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.props.index}.png`;
      const link = `/detail/${this.props.index}`;
      return (
          <span>
              <Link to={process.env.PUBLIC_URL+link}>
            <img src={url} />
            </Link>
          </span>
      )
  }
}

PokemonView.propTypes = {
    index: PropTypes.number
};

export default PokemonView
