const initialState = {
	currentUser: null,
};

export const user = (state = initialState, action) => {
	//Store and/or update state with action
	return {
		...state,
		currentUser: action.currentUser,
	};
};

/* 
Create initial state 
pass in initialState and dispatch
wrap app in provider
*/
