import React from "react";
import reactDom from "react-dom";

import Task from "./task.jsx";
import Background from "./background.jsx";

//create your first component
const Home = () => {
	return (
		<div className="mainbox">
			<Background />
		</div>
	);
};

export default Home;
