import React from 'react';
import TreezIndexContainer from './treez/treez_index_container';
// <h1>Treez Challenge</h1>

const App = () => (
  <div>
    <nav className="treez-navbar">
      <img className="treez-logo" src="treez.svg"></img>
    </nav>
    <TreezIndexContainer/>
  </div>
);

export default App;
