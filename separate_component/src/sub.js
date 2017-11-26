import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Sub extends Component {
  render(){
    return(
      <p>{this.props.text}</p>
    )
  }
}
Sub.propTypes = {
  text: PropTypes.string
}

export default Sub
