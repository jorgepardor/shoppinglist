import React, { useState } from "react";
import Tasklist from "./tasklist.jsx";

//create your first component
const Task = () => {
	const [task, setTask] = useState([]);
	const [text, setText] = useState("");

	const handleChange = (event) => {
		console.log(event.target.value);
		setText(event.target.value);
	};

	const submit = () => {
		setTask([...task, text]);
	};

	return (
		<div>
			{/* <div>
				<select onChange={handleChange}>
					<option>Priority</option>
					<option value="red">Urgent</option>
					<option value="yellow">Low Stock</option>
					<option value="green">Not really needed</option>
				</select>
			</div> */}

			<input type="text" name="description" onChange={handleChange} />
			<button onClick={submit}></button>
		</div>
	);
};

export default Task;
