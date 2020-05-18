import React, {Component} from 'react';
import Form from './Components/Form';
import VehicleDisplay from './Components/VehicleDisplay';
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
    const mappedVehicles = this.state.vehicles.map((vehicle, i) => (
      <VehicleDisplay key={i} vehicle={vehicle}/>
    ))
    return (
      <div className="App">
        WR1 HTTP/Axios Review
        <Form />
        {mappedVehicles}
      </div>
    )
  }
}

export default App;