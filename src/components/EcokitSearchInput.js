import React, { Component, PropTypes } from 'react'

export default class EcokitSearchInput extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      query: this.props.query || ''
    }
  }

  handleSubmit(e) {
    const query = e.target.value.trim();
    // Enter key
    if (e.which === 13) {
      this.props.onSearch(query);
    }
  }

  handleChange(e) {
    const query = e.target.value;
    this.setState(Object.assign({}, this.state,
                  { query: query }));
    this.props.onSearch(query);
  }

  render () {
    return (
      <input
        type="text"
        autoFocus="true"
        value={this.state.query}
        placeholder={this.props.placeholder}
        onChange={this.handleChange.bind(this)}
        onKeyDown={this.handleSubmit.bind(this)} />
    );
  }
}

EcokitSearchInput.propTypes = {
  query: PropTypes.string,
  placeholder: PropTypes.string,
  onSearch: PropTypes.function
};
