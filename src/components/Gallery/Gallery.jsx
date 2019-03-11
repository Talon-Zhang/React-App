import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {Button, Label} from 'semantic-ui-react'
import axios from 'axios'
import PokemonView from '../PokemonView/PokemonView'

import './Gallery.css'

class Gallery extends Component {
    constructor() {
    super();
    var arr = [];
     for (var i = 1; i < 152; i++) {
        arr.push(i);
     }
    this.state = {
      classifier: '',
      pokemon: arr
    };
    this.url = 'https://pokeapi.co/api/v2/pokemon/?limit=1000';
    // this.inputChangeHandler = this.inputChangeHandler.bind(this);
    this.checkHandler = this.checkHandler.bind(this);
    }

    checkHandler() {
    // // Form the URL
    // let url = `${this.baseUrl}${this.state.value}`;
    //
    // // GET some data back!
    // axios.get(url).then((response) => {
    //   console.log(response);
    //
    //   this.setState({
    //     pokemon: response.data
    //   });
    //
    //   console.log(this.state.pokemon);
    // }).catch((error) => {
    //   console.log(error);
    // });
  }


  render() {
     const view = this.state.pokemon.map((i) => {
        return (
          <PokemonView index={i} />
        )
      });

    return (
     <div>
         <Link to="/">
          <Button>
            Home
          </Button>
        </Link>
        <div className="GalleryCss">
            {view}
        </div>
     </div>
    )
  }

}

export default Gallery
