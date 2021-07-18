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
