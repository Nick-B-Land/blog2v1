import "bootstrap/dist/css/bootstrap.min.css";
import "./css/main.css";
import { useEffect, useState } from "react";
import NewPostForm from "./components/newPostForm";
import TweetCard from "./components/tweetCard";
import tweetPostController from "./controllers/tweetPostController";

function App() {
	const [tweetPosts, setTweetPost] = useState([]);
	const [tweetsLoaded, setTweetsLoaded] = useState(false);
	const [reloadTweets, setReloadTweets] = useState(false);

	useEffect(() => {
		async function fetchTweets() {
			console.log("Fetch Tweets called");
			let tweets = await tweetPostController.getAllTweets();
			console.log(tweets);
			setTweetsLoaded(true);
			setTweetPost(tweets.data);
		}
		fetchTweets();
	}, [reloadTweets]);

	return (
		<div className="container">
			<div className="row">
				<div className="col d-flex justify-content-center">
					<h1>Tweeter</h1>
				</div>
			</div>
			<div className="row">
				<div className="col d-flex justify-content-center mt-3">
					<NewPostForm
						setReloadTweets={setReloadTweets}
						reloadTweets={reloadTweets}
					/>
				</div>
			</div>
			{tweetsLoaded
				? tweetPosts.map((tweet) => (
						<div className="row my-3">
							<TweetCard key={tweet.postId} {...tweet} />{" "}
						</div>
				  ))
				: ""}
		</div>
	);
}

export default App;
