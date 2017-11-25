import React from 'react'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      like: false,
      count: 1000
    }
  }
  handleClick() {
    this.setState({
      count: this.state.count + (this.state.like ? -1 : 1),
      like: !this.state.like
    })
  }
  render(){
    var text;
    if (this.state.like == false) {
      text = "+"
    } else {
      text = "-"
    }
    return(
      <div>
        <span>{this.state.count}</span>
        <button onClick={this.handleClick.bind(this)}>{text}</button>
      </div>
    )
  }
}

export default App
