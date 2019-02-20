import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

// 'Home' is already defined as the class name, so provide an alias
// 'Home-header' from the SCSS file gets transformed to 'HomeHeader'
//    because '-' is not allowed in JS variable names
import { Home as HomeCss, HomeHeader } from './Home.module.scss'

class Home extends Component {
  render() {
    return (
      <div className={HomeCss}>
        <h1 className={HomeHeader}>Welcome to the MP2 React Demo!</h1>

        <p>This a landing page for demoing routing.</p>

        <Link to="/pokemon">
          <Button>
            Click here to go to the demo
          </Button>
        </Link>
      </div>
    )
  }

}

export default Home
