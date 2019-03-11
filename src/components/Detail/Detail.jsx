import React, { Component } from 'react'
import './Detail.css'
import axios from "axios";
import {Button, Label} from 'semantic-ui-react'
import {Link} from "react-router-dom";

class Detail extends Component {

  render() {
    const pokeIndex = this.props.match.params.index;
    let url = `https://pokeapi.co/api/v2/pokemon/${pokeIndex}`;
    const prev = `/detail/${Number(pokeIndex)-1}`;
    const next = `/detail/${Number(pokeIndex)+1}`;

    const data = axios.get(url).then((response) => {
        return response.data;
    }).catch((error) => {
      console.log(error);
    });

    console.log(data);




    return (
      <div>
          <Link to={prev}>
          <Button>
            Prev
          </Button>
        </Link>
          <Link to={next} className="DetailRight">
          <Button >
            Next
          </Button>
        </Link>
          <div className="DetailContent">
          {url}
          </div>
      </div>
    )
  }
}

export default Detail
