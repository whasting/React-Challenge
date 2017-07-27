import { combineReducers } from 'redux';

import TreezReducer from './treez_reducer';

const rootReducer = combineReducers({
  treez: TreezReducer
});

export default rootReducer;
