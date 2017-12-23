
// increment likes - index = which post
const INCREMENT_LIKES = 'INCREMENT_LIKES';
export function increment(index) {
  return {
    type: INCREMENT_LIKES,
    payload: {
      index
    }
  }
}
// add comment
const ADD_COMMENT = 'ADD_COMMENT';
export function addComment(postId, author, comment) {
  console.log('dispatch add comment');
  return {
    type: ADD_COMMENT,
    payload: {
      postId,
      author,
      comment
    }
  }
}
// remove comment - find the id in the index
const REMOVE_COMMENT = 'REMOVE_COMMENT';
export function removeComment(postId, index) {
  return {
    type: REMOVE_COMMENT,
    payload: {
      index,
      postId
    }
  }
}

