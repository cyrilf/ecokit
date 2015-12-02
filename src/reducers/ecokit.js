import { createReducer }     from '../utils';
import { ECOKIT_SEARCH } from 'constants/ecokit';

const initialState = '';
export default createReducer(initialState, {
  [ECOKIT_SEARCH] : (state, action) => {
    return action.query;
  }
});
