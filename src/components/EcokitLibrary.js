import React from 'react';
import EcokitItem from 'components/EcokitItem';

export default class EcokitLibrary extends React.Component {

  render () {
    return (
        <ul>
          {this.props.ecokitsItems.map(ecokitItem =>
            <EcokitItem {...ecokitItem} />
          )}
        </ul>
    );
  }
}

EcokitLibrary.propTypes = {
  ecokitsItems: React.PropTypes.arrayOf(React.PropTypes.shape({
      name: React.PropTypes.string.isRequired,
      type: React.PropTypes.string.isRequired
  }).isRequired).isRequired
};
