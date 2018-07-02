import * as actionTypes from '../constants/actionTypes';

const initialState = {
  currentUser: {}
}

export default function users(state = initialState, action){
  switch (action.type) {
  	// case actionTypes.GET_USER_INFO:
   //      return {...state, ...{ currentUser: action.data}};
    default:
      return state
  }
}