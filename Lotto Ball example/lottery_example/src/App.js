import React, {Component} from 'react';
import './App.css';
import Lotto from './Lotto';

class App extends Component {
  render(){
    return (
      <div className="App">
        <h1>
          GET RICH MAH NIBBA
        </h1>
        <Lotto />
        <Lotto title="Mini Lotto" maxBalls={4} maxNum={10}/>
      </div>
    );
  }
}

export default App;
