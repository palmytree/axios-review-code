import React, {Component} from 'react';
import Form from './Components/Form';
import './App.css';

class App extends Component  {
  constructor(props){
    super(props);
    this.state = {
      vehicles: []
    }
  }

  render(){
    console.log(this.state.vehicles)
    return (
      <div className="App">
        WR1 HTTP/Axios Review
        <Form />
      </div>
    )
  }
}

export default App;