import React from "react";
import reactDom from "react-dom";

import Task from "./task.jsx";

//create your first component
const Home = () => {
	return (
		<div className="mainbox">
			<div className="container">
				<div className="flex-row ">
					<div className="col-12 d-flex justify-content-center mt-5">
						<Task />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
