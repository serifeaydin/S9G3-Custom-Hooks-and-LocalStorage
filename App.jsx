import React, { useState } from 'react';

import Charts from './components/Charts';
import Navbar from './components/Navbar';
import { data } from './data.js';

const App = () => {
  const [coinData, setCoinData] = useState(data);
  const [geceModu, setGeceModu] = useState(false);

  return (
    <div className="App">
      <Navbar geceModu={geceModu} setGeceModu={setGeceModu} />
      <Charts coinData={coinData} />
    </div>
  );
};

export default App;
