import React from 'react'

const VehicleDisplay = props => {
	const { vehicle } = props
	const { year, make, model, color, price } = vehicle

	return (
		<tr>
			<td>{year}</td>
			<td>{make}</td>
			<td>{model}</td>
			<td>{color}</td>
			<td>{price}</td>
		</tr>
	)
}

export default VehicleDisplay
