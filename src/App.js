import React from 'react';
import logo from './logo.svg';
import './App.css';

import TableNew from './TableNew';
import 'react-virtualized/styles.css';

function App() {
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <div>
        <TableNew />
      </div>
    </div>
  );
}

export default App;
