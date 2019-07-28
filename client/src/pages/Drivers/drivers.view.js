import React from 'react'
import axios from 'axios';

export default class DriversView extends React.Component {
	state= {
		name: '',
	}

	putDataToDB = (name) => {
		axios.post('http://localhost:4000/api/drivers/add', {
				name,
		})
	};

	handleInput = (event) =>  {
		this.setState({
				name: event.target.value
		})
	}

	render() {
		return (
			<div>
				<input 
					name="driverName"
					id="driverName"
					placeholder="Input driver name here"
					onChange={this.handleInput}
					value={this.state.name}
				/>
				<div
					onClick={() => this.putDataToDB(this.state)}
				>Add driver</div>
			</div>
		)
	}
}
