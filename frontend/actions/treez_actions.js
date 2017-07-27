import * as APIUtil from '../util/treez_api_util.js';

export const RECEIVE_TREEZ = 'RECEIVE_TREEZ';

export const receiveTreez = treez => ({
  type: RECEIVE_TREEZ,
  treez
});

export const fetchTreez = () => dispatch => (
  APIUtil.fetchTreez().then( treez => (
    dispatch( receiveTreez(treez))
  ))
);
