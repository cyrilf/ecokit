import { createReducer }     from '../utils';
import { ECOKIT_SEARCH } from 'constants/ecokit';

const initialState = '';
// This isn't working.. weird..
// export default createReducer(initialState, {
//   [ECOKIT_SEARCH] : (state, action) => {
//     return action.query;
//   }
// });

export default function todos(state = initialState, action) {
  switch (action.type) {
    case ECOKIT_SEARCH:
      return action.query;

    default:
      return state;
  }
}
