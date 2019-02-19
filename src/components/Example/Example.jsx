import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

import styles from './Example.scss'

class Example extends Component {

  render() {
    return (
      <div className="Example">
        <h1 className="Example-header">This is another page!</h1>
        <Link to="/">
          <Button>
            Click here to go back to the landing page
          </Button>
        </Link>
      </div>
    )
  }

}

export default Example
