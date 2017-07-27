import React from 'react';
import TreezIndexItem from './treez_index_item';
import { values } from 'lodash';

class TreezIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchTreez();
  }

  render() {
    const treez = values(this.props.treez);

    return (
      <div>
        <ul className="treez">
          {treez.map((tree) => (
            <TreezIndexItem key={tree.product_id} tree={tree}/>
          ))}
        </ul>
      </div>
    );
  }
}

export default TreezIndex;
