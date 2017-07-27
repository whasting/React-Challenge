import merge from 'lodash/merge';

import {
  RECEIVE_TREEZ
} from '../actions/treez_actions';

const TreezReducer = ( state = {}, action ) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch( action.type ) {
    case RECEIVE_TREEZ:
      return merge({}, state, action.treez);
    default:
      return state;
  }
};

export default TreezReducer;
