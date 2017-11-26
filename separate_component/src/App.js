import React, {Component} from 'react'
import Sub from './sub.js'

class App extends Component {
  render(){
    return(
      <div>
        <Sub text="child-1"/>
        <Sub text="child-2"/>
      </div>
    )
  }
}

export default App
