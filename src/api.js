import axios from 'axios';

export const getTweetsApi = () => axios.get('https://react-training-twitter-api.herokuapp.com/tweet');

export const addTweetApi = (tweet) => axios.post('https://react-training-twitter-api.herokuapp.com/tweet', tweet);