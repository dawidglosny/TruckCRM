import React, { useState } from 'react';
import axios from 'axios';

const DriversView = (params) => {
	const [driver, setDriver] = useState({});

	const putDataToDB = () => {
		console.log(driver)
		axios.post('http://localhost:4000/api/drivers/add', {
			...driver,
		})
	};

	const handleInput = (event) =>  {
		setDriver({ 
			...driver,
			[event.target.name]: event.target.value,
		})
	}

	return ( 
		<div>
			<input 
				name="name"
				id="name"
				placeholder="Input driver name here"
				onChange={handleInput}
				value={driver.name || ''}
			/>
			<input 
				name="phone"
				id="phone"
				placeholder="Input driver phone here"
				onChange={handleInput}
				value={driver.phone || ''}
			/>
			<div
				onClick={putDataToDB}
			>Add driver</div>
		</div>
	);
}

export default DriversView;