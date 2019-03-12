import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {Button, Form, Input, Label} from 'semantic-ui-react'
import PokemonView from '../PokemonView/PokemonView'

import './Search.css'
import axios from "axios";

class Search extends Component {
    constructor(props) {
    super(props);
    var arr = [];

    this.state = {
      value: '',
      pokemon: arr,
      pokeDict: {},
      sortA: 'Ascending',
      sortB: ''
    };
    this.inputChangeHandler = this.inputChangeHandler.bind(this);
    this.handleChangeA = this.handleChangeA.bind(this);
    this.handleChangeB = this.handleChangeB.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    const url = `https://pokeapi.co/api/v2/pokemon/?limit=806`;
    axios.get(url).then((response) => {
      this.setState({
        pokeDict: response.data.results
      });
    }).catch((error) => {
      console.log(error);
    });
    }

    handleChangeA(event) {
    this.setState({sortA: event.target.value});
    }

    handleChangeB(event) {
    this.setState({sortB: event.target.value});
    }

    handleSubmit() {
        const input = this.state.value;
        if (input === ''){
            this.setState({ pokemon: [] });
            return;
        }
        let dict = this.state.pokeDict;
        let arr = [];
        for (var i=0; i<dict.length; i++)
        {
            if (dict[i].name.indexOf(input) === 0){
                arr.push(i+1);
            }
        }

        let start = 0;
        let end = 0;
        if (this.state.sortB === "Gen1"){
            start = 1;
            end = 151;
        }
        else if (this.state.sortB === "Gen2"){
            start = 152;
            end = 251;
        }
        else if (this.state.sortB === "Gen3"){
            start = 252;
            end = 386;
        }
        else{
            start = 1;
            end = 806;
        }

        let newArr = [];
        if (this.state.sortA === "Ascending"){
            for (var i=start; i<end+1;i++){
                if (arr.indexOf(i)>-1){
                    newArr.push(i);
                }
            }
        }
        else{
            for (var i=end; i>start-1;i--){
                if (arr.indexOf(i)>-1){
                    newArr.push(i);
                }
            }
        }
        this.setState({ pokemon: newArr });
    }


    inputChangeHandler(event) {
        let input =  event.target.value;
        this.setState({ value: input });
        if (input === ''){
            this.setState({ pokemon: [] });
            return;
        }
        let dict = this.state.pokeDict;
        let arr = [];
        for (var i=0; i<dict.length; i++)
        {
            if (dict[i].name.indexOf(input) === 0){
                arr.push(i+1);
            }
        }
        this.setState({ pokemon: arr });
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
        <br/>
          <Form onSubmit={this.handleSubmit}>
            <Label>
              <select value={this.state.sortA} onChange={this.handleChangeA}>
                <option value="Ascending">ascending</option>
                <option value="Descending">descending</option>
              </select>
                <select value={this.state.sortB} onChange={this.handleChangeB}>
                   <option value=""></option>
                 <option value="Gen1">gen1</option>
                 <option value="Gen2">gen2</option>
                 <option value="Gen3">gen3</option>
              </select>
            </Label>
        <Button>
          GO
        </Button>
      </Form>


      <div className = "SearchCss">
         <Input
          onChange={this.inputChangeHandler}
          label='Find your Pokemon by name! '
          placeholder='Pokemon Name'
          value={this.state.value}
        />
         </div>

        <div className="ViewCss">
            {view}
        </div>
     </div>
    )
  }
}

export default Search
