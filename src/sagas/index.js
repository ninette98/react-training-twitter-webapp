import { call, put, takeLatest } from 'redux-saga/effects';
import { GET_TWEETS, ADD_TWEET, GET_TWEETS_SUCCESS } from '../redux/actions';
import { getTweetsApi, addTweetApi } from '../api';

function* getTweets() {
    const response = yield call(getTweetsApi);
    yield put({
        type: GET_TWEETS_SUCCESS,
        tweets: response.data
    });
}

function* addTweet(action) {
    yield call(addTweetApi, action.tweet);
}

function* mainSaga() {
    yield takeLatest(GET_TWEETS, getTweets);
    yield takeLatest(ADD_TWEET, addTweet);
}

export default mainSaga;