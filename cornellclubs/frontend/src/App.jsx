import React from 'react';
import Homepage from './components/Home/Homepage';
import Router from './components/Routes/Router';
import testData from './data/testData';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: null,
    };
  }

  render() {
    return (
      <div>
        <Homepage />
        <Router data={testData} />
      </div>
    );
  }
}

export default App;
