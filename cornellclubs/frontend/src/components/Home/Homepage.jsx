import React from 'react';
import './Homepage.css';
import SearchBox from './SearchBox';
import testData from '../../data/testData';

export default class Homepage extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     click: true,
  //   }
  // }
  // componentWillMount() {
  //   document.addEventListener('mousedown', this.handleClick, false);
  // }
  //
  // componentWillUnmount() {
  //   document.removeEventListener('mousedown', this.handleClick, false);
  // }

  // handleClick = (e) => {
  //   console.log('home');
  //   if (this.node.contains(e.target)) {
  //     this.setState({
  //       click: true,
  //     })
  //   } else {
  //     this.setState({
  //       click: false,
  //     })
  //   }
  // };

  render() {
    // const { click } = this.state;
    return (
      <div className="title">
        <div className="title-text">
          <h1>Cornell: Any Person, Any Club</h1>
          <h3>Find your dream club today.</h3>
        </div>
        <SearchBox data={testData} />
      </div>
    );
  }
}
