import { connect } from 'react-redux';

import { fetchTreez } from '../../actions/treez_actions';
import TreezIndex from './treez_index';

const mapStateToProps = ( state, { match } ) => {
  let treez = "";

  if ( state.treez ) {
    treez = state.treez.product_list;
  }

  return ({
    treez
  });
};

const mapDispatchToProps = dispatch => ({
  fetchTreez: () => dispatch(fetchTreez())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TreezIndex);
