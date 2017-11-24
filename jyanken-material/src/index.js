import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import MuiThemeProvider from 'materil-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton'
import Paper from 'material-ui/Paper';
import {Tabs, Tab} from 'material-ui/Tabs'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import Jyanken from './Jyanken'

class JyankeGamePage extends Component {
  constructor(props){
    super(props)
    this.jyanken = new Jyanken()
    this.state = {scores: [], status: {}, tabIndex: 0}
  }
  componentDidMount(){
    this.getResult()
  }
  tabChange(ix){
    this.setState({tabIndex: ix})
    this.getResult()
  }
  render() {
    return (
      <div>
        <h1>じゃんけん ポン！</h1>
        <JyankenBox actionPon={(te) => this.pon(te)} />
        <ScoreBox human={this.state.human} computer={this.state.computer} judgment={this.judge()} />
      </div>
    )
  }
}

const JyankenBox = (props) => {
  return(
    <div>
      <button onClick={() => props.actionPon(0)}>グー</button>
      <button onClick={() => props.actionPon(1)}>チョキ</button>
      <button onClick={() => props.actionPon(2)}>パー</button>
    </div>
  )
}

JyankenBox.propTypes = {
  actionPon: PropTypes.func
}

const ScoreBox = (props) => {
  const teString = ["グー", "チョキ", "パー"]
  const judgmentString = ["引き分け", "勝ち", "負け"]
  return (
    <table>
      <tbody>
        <tr><th>あなた</th><td>{teString[props.human]}</td></tr>
        <tr><th>Computer</th><td>{teString[props.computer]}</td></tr>
        <tr><th>勝敗</th><td>{judgmentString[props.judgment]}</td></tr>
      </tbody>
    </table>
  )
}

ScoreBox.propTypes = {
  human: PropTypes.number,
  computer: PropTypes.number,
  judgment: PropTypes.number
  // score: PropTypes.object
}

ReactDOM.render(
  <JyankeGamePage />,
  document.getElementById('root')
)
