import React from 'react';

export default class EcokitItem extends React.Component {

  render () {
    const hasPicture = this.props.pictures &&
                       this.props.pictures.length;
    let renderPicture = '';
    if (hasPicture) {
        renderPicture = <img src={this.props.pictures[0]} />;
    }

    return (
        <li>
          {renderPicture}
          <h3>{this.props.name} <small>({this.props.type})</small></h3>
        </li>
    );
  }
}

EcokitItem.propTypes = {
  name: React.PropTypes.string.isRequired,
  type: React.PropTypes.string.isRequired
};
