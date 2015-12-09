import React, { Component, PropTypes } from 'react'

export default class EcokitMonth extends Component {

  render () {
    return (
        <li>
          <button type="button" onClick={this.props.onClick}>{this.props.name} <small>{this.props.selected}</small></button>
        </li>
    );
  }
}

EcokitMonth.propTypes = {
  onClick: PropTypes.function
};
