import { createReducer }     from '../utils';

const initialState = [{name: 'Tomato', type: 'vegetable'},
                      {name: 'Banana', type: 'fruit'}];
export default createReducer(initialState, {});
