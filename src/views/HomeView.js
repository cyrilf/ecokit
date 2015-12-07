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
export class HomeView extends React.Component {
  static propTypes = {
    actions  : React.PropTypes.object,
    counter  : React.PropTypes.number
  }

  render () {
    return (
      <div className='container text-center'>
        <h1>Welcome to the React Redux Starter Kit</h1>
        {this.props.ecokitLibrary.length} fruits/vegetables
        <EcokitLibrary ecokitsItems={this.props.ecokitLibrary} />

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
