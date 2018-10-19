export const UPDATE_USERNAME = 'UPDATE_USERNAME';
export const GET_TWEETS = 'GET_TWEETS';
export const GET_TWEETS_SUCCESS = 'GET_TWEETS_SUCCESS';
export const ADD_TWEET = 'ADD_TWEET';
export const ADD_TWEET_SUCCESS = 'ADD_TWEET_SUCCESS';

export const updateUsername = (username) => ({
    type: UPDATE_USERNAME,
    username: username
});

export const getTweets = () => ({
    type: GET_TWEETS
});

export const addTweet = (tweet) => ({
    type: ADD_TWEET,
    tweet: tweet
});