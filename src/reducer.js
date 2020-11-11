//Listens to any action that gets fired into the DataLayer

//Create the initial State:

export const initialState = {
  user: null,
};

export const actionTypes = {
  SET_USER: "SET_USER",
};
// State is what the DataLayer Looks like and action is what we are trying to do (like push info, set user, etc.)
const reducer = (state, action) => {
  //Listen to the DataLayer --> actionType for example SET_USER:
  switch (action.type) {
    case actionTypes.SET_USER:
      //Return the current state it was in & modify the new user
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

export default reducer;
