import React from "react";

const TweetCard = (props) => {
	return (
		<div className="col pt-3 card w-75 d-flex justify-content-center">
			<div className="row">
				<div className="col d-flex justify-content-between">
					<h3>{props.postersName}</h3>
					<h5>{new Date(props.postDate).toLocaleTimeString()}</h5>
				</div>
			</div>
			<div className="row">
				<div className="col card-body">
					<p className="card-text">{props.postContent}</p>
				</div>
			</div>
		</div>
	);
};

export default TweetCard;
