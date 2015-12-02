import { combineReducers }    from 'redux';
import { routeReducer }       from 'redux-simple-router';
import counter                from './counter';
import ecokit                 from './ecokit';
import ecokitLibrary         from './ecokitLibrary';

export default combineReducers({
  counter,
  ecokit,
  ecokitLibrary,
  routing: routeReducer
});
