import React from 'react';
import Homepage from './components/Home/Homepage';
import Router from './components/Routes/Router';
import testData from './data/testData';

function App() {
  return (
    <div>
      <Homepage />
      <Router data={testData} />
    </div>
  );
}

export default App;
