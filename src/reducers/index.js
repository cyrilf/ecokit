import { combineReducers }    from 'redux';
import { routeReducer }       from 'redux-simple-router';
import counter                from './counter';
import ecokitSearch           from './ecokit';
import ecokitLibrary          from './ecokitLibrary';

export default combineReducers({
  counter,
  ecokitSearch,
  ecokitLibrary,
  routing: routeReducer
});
