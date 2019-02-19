import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import styles from './Home.scss'

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <h1 className="Home-header">Welcome to the MP2 React Demo!</h1>

        <p>This a landing page for demoing routing.</p>

        <Link to="/example">
          <Button>
            Click here to go to the demo
          </Button>
        </Link>
      </div>
    )
  }

}

export default Home
