import React, {Component} from 'react'

class App extends Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
  }

  handleClick() {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return(
      <div>
        <span>{this.state.count}</span>
        <button onClick={this.handleClick.bind(this)}>+</button>
      </div>
    )
  }
}


export default App
