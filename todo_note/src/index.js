import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import './index.css'

class TodoNote extends Component {
  constructor(props){
    super(props)
    this.state = {books: []}
  }
  componentDidMount(){
    this.setState({books: [
        {date: "1/1", todo: "買い物", done: false},
        {date: "1/3", todo: "掃除", done: false},
        {date: "2/1", todo: "テスト", done: false},
        {date: "2/5", todo: "サークル", done: false},
      ]
    })
  }

  addBook(date, todo, done){
    const book = {date:date, todo: todo, done: done}
    this.setState({books: this.state.books.concat(book)})
  }

  render(){
    return (
      <div>
        <Title>TODOリスト</Title>
        <TodoList books={this.state.books} />
        <TodoEntry add={(date, todo, done) => this.addBook(date, todo, done)} />
      </div>
    )
  }
}

class TodoEntry extends Component {
  constructor(props) {
    super(props)
    this.state = {date: '', todo: '', done: false}
  }

  onChangeDate(event){
    this.setState({date: event.target.value})
  }

  onChangeTodo(event){
    this.setState({todo: event.target.value})
  }

  onChageDone(event){
    this.setState({done: event.target.value == "done"})
  }

  onClickSubmit() {
    this.props.add(this.state.date, this.state.todo, this.state.done)
    this.setState({date: '', todo: '', done: false})
  }

  render() {
    return (
      <div className="entry">
        <filedset>
          <legend>Todo追加</legend>
            <div>日付: <input type="text" value={this.state.date} onChange={(event) => this.onChangeDate(event)}/></div>
            <div>項目: <input type="text" value={this.state.todo} onChange={(event) => this.onChangeTodo(event)}/></div>
            <div><input type="submit" value="追加" onClick={() => this.onClickSubmit()}/></div>
        </filedset>
      </div>
    )
  }
}
TodoEntry.propTypes = {
  add: PropTypes.func.isRequired
}

const TodoList = (props) => {
  return(
    <div>
      <table className="book">
        <thead data-type="ok">
          <tr><th>日付</th><th>Todoリスト</th><th>Done</th></tr>
        </thead>
        <tbody>
          {props.books.map((book) => <TodoItem book={book} key={book.date + book.todo + book.done} />)}
        </tbody>
      </table>
    </div>
  )
}
TodoList.propTypes = {
  books: PropTypes.array.isRequired
}


const TodoItem = (props) => {
  const {date, todo , done} = props.book
  return (
    <tr>
      <td>{date}</td>
      <td>{todo}</td>
      <td>{done}</td>
    </tr>
  )
}
TodoItem.propTypes = {
  book: PropTypes.object.isRequired
}

const Title = (props) => {
  return (<h1>{props.children}</h1>)
}
Title.propTypes = {
  children: PropTypes.string
}

ReactDOM.render(
  <TodoNote />,
  document.getElementById('root')
)
