import React, { useLayoutEffect } from "react";
import Task from "./task.jsx";

//create your first component
const Tasklist = () => {
	const list = [
		{ color: "red", description: "Coca Cola" },
		{ color: "yellow", description: "Hielo" },
		{ color: "green", description: "Salsa para pizza" },
	];

	return (
		<div className="pendingtasks">
			<ul>
				{list.map((value, index) => {
					return (
						<li key={index}>
							{`${value.color} ${value.description}`}
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Tasklist;
