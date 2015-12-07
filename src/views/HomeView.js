import React                  from 'react';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';
import counterActions         from 'actions/counter';
// import ecokitActions          from 'actions/ecokit';
import { Link }               from 'react-router';
import EcokitLibrary          from 'components/EcokitLibrary';

// We define mapStateToProps and mapDispatchToProps where we'd normally use
// the @connect decorator so the data requirements are clear upfront, but then
// export the decorated component after the main class definition so
// the component can be tested w/ and w/o being connected.
// See: http://rackt.github.io/redux/docs/recipes/WritingTests.html
const mapStateToProps = (state) => ({
  counter: state.counter,
  ecokit: state.ecokit,
  ecokitLibrary: state.ecokitLibrary,
  routerState: state.router
});
const mapDispatchToProps = (dispatch) => ({
  actions : bindActionCreators(counterActions, dispatch)
});

const lookup = (query) =>
  items => items.filter(item => item.name.toLowerCase().indexOf(query) !== -1);

export class HomeView extends React.Component {
  static propTypes = {
    actions  : React.PropTypes.object,
    counter  : React.PropTypes.number
  }

  render () {
    const { ecokit, ecokitLibrary } = this.props;
    const filteredEcokitLibrary = lookup(ecokit)(ecokitLibrary);

    return (
      <div className='container text-center'>
        <h1>Ecokit</h1>
        <hr />
        <h2>{ecokitLibrary.length} fruits/vegetables</h2>
        <EcokitLibrary ecokitsItems={filteredEcokitLibrary} />

        <hr />
        <h2>Sample Counter: {this.props.counter}</h2>
        <button className='btn btn-default'
                onClick={this.props.actions.increment}>
          Increment
        </button>
        <hr />
        <Link to='/about'>Go To About View</Link>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);
