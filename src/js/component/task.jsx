import React, { useState } from "react";

//create your first component
const Task = () => {
	const [task, setTask] = useState([]);
	const [text, setText] = useState("");

	const handleChange = (event) => {
		event.preventDefault();
		console.log(event.target.value);
		setText(event.target.value);
		this.setText({
			value: "",
		});
	};

	const Delete = (item) =>
		setTask(task.filter((deleteMe) => item != deleteMe));
	// console.log(index);

	const submit = () => {
		setTask([...task, text]);
	};

	return (
		<div className="listbox border rounded-2 col-8">
			<div className="title my-3 px-3">
				<h1 className="display-2 text-center">
					<span className="fst-italic">Mise en place</span> list 🧑‍🍳
				</h1>
			</div>

			<div class="input-group mb-3 d-flex justify-content-between px-3">
				<input
					type="text"
					className="form-control"
					placeholder="List your ingredients here"
					aria-label="List your ingredients here"
					aria-describedby="button-addon1"
					onChange={handleChange}
				/>
				<button
					className="btn btn-outline-success btn-sm"
					id="button-addon2"
					onClick={submit}>
					Add item ✔️
				</button>
			</div>

			<div className="entryList">
				{task.map((value, index) => (
					<ul className="list-group px-2">
						<li
							className="list-group-item d-flex justify-content-between mb-2"
							key={index}>
							<span>{value}</span>

							<button
								className="btn btn-outline-danger btn-sm"
								onClick={() => Delete(value)}>
								❌
							</button>
						</li>
					</ul>
				))}
			</div>
		</div>
	);
};
export default Task;
