import React, { useState } from "react";
import tweetPostController from "../controllers/tweetPostController";

const NewPostForm = (props) => {
	const [showForm, setShowForm] = useState(false);
	const [posterName, setPosterName] = useState("");
	const [postContent, setPostContent] = useState("");

	async function handleSubmit() {
		let tweetObj = {
			postId: "",
			postersName: posterName,
			postContent: postContent,
			postLikes: 0,
			postDate: new Date().toISOString(),
		};

		let apiResponse = await tweetPostController.createTweet(tweetObj);

		if (apiResponse.status === 200) {
			setShowForm(!showForm);
			setPostContent("");
			setPosterName("");
			props.setReloadTweets(!props.reloadTweets);
		}
	}

	function handleBack() {
		setShowForm(false);
	}

	return (
		<>
			<div className="row">
				<div className="col d-flex justify-content-center">
					{showForm ? null : (
						<button
							className="btn btn-lg btn-primary text-white"
							onClick={() => setShowForm(!showForm)}
						>
							New Post
						</button>
					)}
				</div>
			</div>
			{showForm ? (
				<div className="card w-50 py-3 px-3">
					<div className="row ">
						<div className="col d-flex justify-content-center">
							<div className="form-group">
								<h5>Name</h5>
								<input
									type="text"
									value={posterName}
									onChange={(e) => setPosterName(e.target.value)}
									className="form-control"
									placeholder="Enter your name!"
								/>
							</div>
						</div>
					</div>
					<div className="row my-3">
						<div className="col d-flex justify-content-center">
							<div className="form-group">
								<h5> Tweet Content</h5>
								<textarea
									type="text"
									value={postContent}
									onChange={(e) => setPostContent(e.target.value)}
									className="form-control"
									placeholder="Enter your thoughts!"
								/>
							</div>
						</div>
					</div>
					<div className="row mb-3">
						<div className="col d-flex justify-content-around">
							<button className="btn btn-success" onClick={handleSubmit}>
								{" "}
								Tweet!{" "}
							</button>
							<button className="btn btn-warning" onClick={handleBack}>
								{" "}
								Cancel{" "}
							</button>
						</div>
					</div>
				</div>
			) : null}
		</>
	);
};

export default NewPostForm;
