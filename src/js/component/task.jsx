import React, { useState, useEffect } from "react";

const Task = () => {
	const [task, setTask] = useState([]);
	const [text, setText] = useState("");

	const handleChange = (event) => {
		event.preventDefault();
		console.log(event.target.value);
		setText(event.target.value);
	};

	const Delete = (item) =>
		setTask(task.filter((deleteMe) => item != deleteMe));
	// console.log(index);

	const submit = (e) => {
		setTask([...task, text]);
		setText("");
	};

	return (
		<div className="listbox border rounded-2 col-8">
			<div className="title my-3 px-3">
				<h1 className="display-2 text-center">
					<span className="fst-italic">Mise en place</span> list 🧑‍🍳
				</h1>
			</div>

			<div className="input-group mb-3 d-flex justify-content-between px-3">
				<input
					type="text"
					className="form-control"
					placeholder="List your ingredients here"
					aria-label="List your ingredients here"
					aria-describedby="button-addon1"
					onChange={handleChange}
					value={text}
					onKeyDown={(e) => {
						{
							e.key === "Enter" ? submit(e) : "";
						}
					}}
				/>
				<button
					className="btn btn-outline-success btn-sm"
					id="button-addon2"
					onClick={(e) => {
						submit(e);
					}}>
					Add item ✔️
				</button>
			</div>

			<div className="entryList">
				{task.map((value, index) => (
					<ul className="list-group px-2">
						<li
							key={value}
							className="list-group-item d-flex justify-content-between mb-2">
							{value}

							<button
								className="btn btn-outline-danger btn-sm"
								onClick={() => Delete(value)}>
								❌
							</button>
						</li>
					</ul>
				))}

				<div>
					{task.length === 0 ? (
						<p className="text-center">
							✨✨ Horray, no tasks here! ✨✨
						</p>
					) : task.length === 1 ? (
						<p className="text-center">
							Tienes <span className="fw-bold">una</span> tarea
						</p>
					) : (
						<p className="text-center">
							Tienes{" "}
							<span className="fw-bold">{task.length}</span>{" "}
							tareas por hacer
						</p>
					)}
				</div>
			</div>
		</div>
	);
};

export default Task;
