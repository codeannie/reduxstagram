import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// import the root reducer 
import rootReducer from './reducers/index';

// need mock data in data folder
import comments from './data/comments';
import posts from './data/posts';

// create an object for the default data 
const defaultState = {
  posts,  //ES6 same as posts: posts
  comments
}

// create the store - takes reducer & state
export default store = createStore(rootReducer, defaultState);

// want to remember browser history 
export const history = syncHistoryWithStore(browserHistory, store);


