import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import { Home as HomeCss} from './Home.module.scss'

class Home extends Component {
  render() {
    return (
      <div className={HomeCss}>
        <h1>Welcome to my Pokemon Site!</h1>

        <Link to="/gallery">
          <Button>
            Gallery
          </Button>
        </Link>

         <Link to="/pokemon">
          <Button>
            Search
          </Button>
        </Link>
      </div>
    )
  }

}

export default Home
