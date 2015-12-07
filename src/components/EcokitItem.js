import React from 'react';

export default class EcokitItem extends React.Component {

  render () {
    return (
        <li>{this.props.name} ({this.props.type})</li>
    );
  }
}

EcokitItem.propTypes = {
  name: React.PropTypes.string.isRequired,
  type: React.PropTypes.string.isRequired
};
