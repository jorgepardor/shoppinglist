import React from "react";

import background from "../../img/background.jpg";
import Task from "./task.jsx";

//create your first component
function Background() {
	return (
		<div
			style={{
				backgroundImage: `url(${background})`,
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
				height: "100vh",
			}}>
			<div className="container">
				<div className="flex-row ">
					<div className="col-12 d-flex justify-content-center pt-5">
						<Task />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Background;
