import { createReducer }     from '../utils';

const initialState = [{id: 1, name: 'Tomato', type: 'vegetable', pictures: ['http://www.hummert.com/UserFiles/image/tomato_plant.jpg']},
                      {id: 2, name: 'Banana', type: 'fruit', pictures: ['http://www.plasticstoday.com/sites/default/files/bananas.jpg']}];
export default createReducer(initialState, {});
