import React, { Component } from 'react'
import './Detail.css'
import axios from "axios";
import {Button} from 'semantic-ui-react'
import {Link} from "react-router-dom";

class Detail extends Component {
    constructor() {
    super();
    this.state = {
      data:{}
    };
   }

    componentDidMount() {
       const pokeIndex = this.props.match.params.index;
       const url = `https://pokeapi.co/api/v2/pokemon/${pokeIndex}`;
      axios.get(url).then((response) => {
      this.setState ({
        data: response.data
      });
    }).catch((error) => {
      console.log(error);
    });
  }

  componentWillReceiveProps(){
       const pokeIndex = this.props.match.params.index;
      const url = `https://pokeapi.co/api/v2/pokemon/${pokeIndex}`;
     axios.get(url).then((response) => {
      this.setState ({
        data: response.data
      });
    }).catch((error) => {
      console.log(error);
    });
  }

  render() {
    const pokeIndex = this.props.match.params.index;
    const prev = `/detail/${Number(pokeIndex)-1}`;
    const next = `/detail/${Number(pokeIndex)+1}`;
    const pokeData = this.state.data;
    const urlFront = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeIndex}.png`;
    const urlBack = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pokeIndex}.png`;

    return (
      <div>
          <Link to={process.env.PUBLIC_URL+prev}>
          <Button>
            Prev
          </Button>
        </Link>
          <Link to={process.env.PUBLIC_URL+next} className="DetailRight">
          <Button >
            Next
          </Button>
        </Link>
          <div className="DetailContent">
              <h1>#{pokeIndex}  {pokeData.name}</h1>
              <img className="pokeImg" src={urlFront} />
              <img className="pokeImg" src={urlBack} />
              <p>weight: {pokeData.weight}</p>
              <p>height: {pokeData.height}</p>
              <p>generation: 1st</p>
              <p>base_experience: {pokeData.base_experience}</p>
              <p>area_encountered: {pokeData.location_area_encounters}</p>
          </div>
      </div>
    )
  }
}

export default Detail
