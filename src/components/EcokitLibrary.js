import React from 'react';
import EcokitItem from 'components/EcokitItem';

export default class EcokitLibrary extends React.Component {

  render () {
    return (
        <ul>
          {this.props.ecokitsItems.map(ecokitItem =>
            <EcokitItem key={ecokitItem.id} {...ecokitItem} />
          )}
        </ul>
    );
  }
}

EcokitLibrary.propTypes = {
  ecokitsItems: React.PropTypes.arrayOf(React.PropTypes.shape({
      id: React.PropTypes.number.isRequired,
      name: React.PropTypes.string.isRequired,
      type: React.PropTypes.string.isRequired,
      pictures: React.PropTypes.array
  }).isRequired).isRequired
};
