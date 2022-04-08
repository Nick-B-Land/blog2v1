import axios from "axios";

const NEW_TWEET_API_URL = "http://localhost:8080/api/tweet/new";
const GET_ALL_TWEETS_API_URL = "http://localhost:8080/api/tweet/all";

class TweetPostController {
	createTweet(newTweet) {
		return axios.post(NEW_TWEET_API_URL, newTweet);
	}

	getAllTweets() {
		return axios.get(GET_ALL_TWEETS_API_URL);
	}
}

export default new TweetPostController();
