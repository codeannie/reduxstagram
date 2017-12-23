//when comment is updated, only need to the specific one vs the entire state
export function postComments(state = [], action) {
  switch(action.type) {
    case 'ADD_COMMENT':
    // return new state with new content
      return [...state, {
        user: action.author,
        text: action.comment
      }];

    case 'REMOVE_COMMENT':
    console.log('removing comment');
    // return state without deleted commented
      return [
        //from start to the one we want to delete
        ...state.slice(0, action.index),
        // after the deleted one to the end
        ...state.slice(action.index + 1)
      ]
      return state;
    default: 
      return state;
  }
  return state;
}

function comments (state = [], action) {
  // check if post is there
  if (typeof action.postId !== 'undefined') {
    return {
      // take current state
      ...state,
      // overwrite the post with a new one 
      [action.postId] : postComments(state[action.postId], action)
    }
  }
  return state; 
}

export default comments; 
