// reducer takes 2 things:

// 1. the action (info on what happened)
// 2. copy of current state 

// what happened - action
// store - current state

// return new copy of store (state) 
// React will take care of DOM updates

// give it [] because state is not going to equal anything yet
export default function posts (state = [], action) {
  switch(action.type) {
    case 'INCREMENT_LIKES' :
    console.log('incrementing likes"')
    const index = action.payload.index;
    // return updated state with +1 like on specific photo
    return [
      ...state.slice(0, index), // before the one we are updating
      {...state[index], likes: state[index].likes + 1}, // update the actual post we want to update
      ...state.slice(index + 1), // everything after the one we are updating
    ]
    default:
      return state;
  }
}