import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {Button, Form, Label} from 'semantic-ui-react'
import PokemonView from '../PokemonView/PokemonView'

import './Gallery.scss'

class Gallery extends Component {
    constructor(props) {
    super(props);
    var arr = [];
     for (var i = 1; i < 102; i++) {
        arr.push(i);
     }
    this.state = {
      value: 'Early',
      pokemon: arr
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit() {
    const early = [1,4,7,10,13,16,19,21,23,25,27,29,32,35,37,39,41,43,46,48,50,52,54,56,58,60,63,66,69,72,74,77,79,81,84,86,8,90,92,96,98,100];
    const medium = [2,5,8,11,14,17,30,32,44,61,64,67,70,75,93];
    const mature = [3,6,9,12,15,18,20,22,24,26,28,31,34,36,38,40,42,45,47,49,51,53,55,57,59,62,65,68,71,73,76,78,80,82,83,85,87,89,91,94,95,97,99,101];
      if (this.state.value === "Early"){
          this.setState({pokemon: early});
      }
      else if (this.state.value === "Medium"){
          this.setState({pokemon: medium});
      }
      else if (this.state.value === "Mature"){
          this.setState({pokemon: mature});
      }
  }

  render() {
     const view = this.state.pokemon.map((i) => {
        return (
          <PokemonView index={i} />
        )
      });

    return (
     <div>
         <Link to={process.env.PUBLIC_URL+"/"}>
          <Button>
            Home
          </Button>
        </Link>

        <div className="FormCss">
          <Form onSubmit={this.handleSubmit}>
            <Label>
                <h5>Filter by Stage:</h5>
              <select value={this.state.value} onChange={this.handleChange}>
                <option value="Early">Early</option>
                <option value="Medium">Medium</option>
                <option value="Mature">Mature</option>
              </select>
            </Label>
        <Button>
          GO
        </Button>
      </Form>
        </div>

        <div className="GalleryCss">
            {view}
        </div>
     </div>
    )
  }
}

export default Gallery
