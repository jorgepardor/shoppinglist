import React from "react";
import reactDom from "react-dom";

import Task from "./task.jsx";
import Tasklist from "./tasklist.jsx";

//create your first component
const Home = () => {
	return (
		<div>
			<div className="newtask">
				<Task />
			</div>
			<div className="taskList">
				<Tasklist />
			</div>
		</div>
	);
};

export default Home;
