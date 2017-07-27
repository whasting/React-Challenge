import React from 'react';

const TreeIndexItem = ({ tree }) => (
  <li className="tree-index-item">
    <div className="img-wrapper">
      <img className="tree-index-item-photo" src={tree.images.cropped_image}></img>
    </div>
    <div className="tree-index-item-information">
      <div className="brand-name">
        {tree.brand}
      </div>
      <div className="product-name">
        {tree.product_name}
      </div>
      <div>
        {tree.type}
      </div>
      <div>
        THC % {tree.attributes.thc_percentage}
      </div>
      <div className="classifications">
        <h1>Classifications</h1>
        {tree.classifications.map(classification => <p>{classification}</p>)}
      </div>
      <div className="general-attributes">
        <h1>General Attributes</h1>
        {tree.attributes.general.map(attr => <p>{attr}</p>)}
      </div>
      <div className="price">
        {tree.size_list.forEach((size) => {
          if (size.size === 1) {
            return (<div>{size.price_sell * 3.5}</div>);
          }
        })}
      </div>
    </div>
  </li>
);

export default TreeIndexItem;
