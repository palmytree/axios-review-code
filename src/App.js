import React, { Component } from 'react'
import axios from 'axios'
import Form from './Components/Form'
import VehicleDisplay from './Components/VehicleDisplay'
import './App.css'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			vehicles: []
		}
		this.addVehicle = this.addVehicle.bind(this)
	}

	componentDidMount() {
		axios
			.get('https://joes-autos.herokuapp.com/api/vehicles')
			.then(res => this.setState({ vehicles: res.data }))
			.catch(err => console.log(err))
	}

	addVehicle(newCar) {
		axios
			.post('https://joes-autos.herokuapp.com/api/vehicles', newCar)
			.then(res => this.setState({ vehicles: res.data.vehicles }))
			.catch(err => console.log(err))
	}

	render() {
		console.log(this.state.vehicles)
		const mappedVehicles = this.state.vehicles.map((vehicle, i) => (
			<VehicleDisplay key={i} vehicle={vehicle} />
		))
		return (
			<div className='App'>
				WR1 HTTP/Axios Review
				<Form addVehicle={this.addVehicle} />
				<table>
					<thead>
						<tr>
							<th>Year</th>
							<th>Make</th>
							<th>Model</th>
              <th>Color</th>
              <th>Price</th>
						</tr>
					</thead>
					<tbody>{mappedVehicles}</tbody>
				</table>
			</div>
		)
	}
}

export default App
