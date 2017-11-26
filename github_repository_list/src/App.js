import React, { Component } from 'react'

const REQUEST_URL = 'https://api.github.com/users/TaigaMikami/repos'
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }

  componentDidMount(){
    this.fetchData()
  }

  fetchData() {
    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          data: responseData,
        })
      })
  }

  render() {
    return(
      <ul>
        {this.state.data.map((item) => {
          return (
            <li key={item.id}>{item.name}</li>
          )
        })}
      </ul>
    )
  }
}

export default App
