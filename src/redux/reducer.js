import { UPDATE_USERNAME, ADD_TWEET } from './actions';

const INIT_STATE = {
    username: 'Ilyas Hanagria',
    tweets: []
};

const reducer = (state = INIT_STATE, action) => {
    switch(action.type) {
        case UPDATE_USERNAME:
            return {
                ...state,
                username: action.username
            };
        case ADD_TWEET:
            return {
                ...state,
                tweets: [...state.tweets, action.tweet]
            };
        default:
            return state;
    }
};

export default reducer;