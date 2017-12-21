// reducer takes 2 things:

// 1. the action (info on what happened)
// 2. copy of current state 

// what happened - action
// store - current state

// return new copy of store (state) 
// React will take care of DOM updates

// give it [] because state is not going to equal anything yet
export default function posts (state = [], action) {
  console.log(state, action);
  return state; 
}