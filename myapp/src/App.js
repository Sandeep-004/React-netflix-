import React from 'react';
import Netflix from './Netflix';
import Amazon from './Amazon';

const favseries = 'netflix';

const App = () =>  (
  <React.StrictMode>
  {(favseries==='netflix') ? <Netflix /> : <Amazon />  }
  
  </React.StrictMode>
);

export default App;
