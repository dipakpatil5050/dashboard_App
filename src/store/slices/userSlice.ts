import { type PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
	user: null,
	error: null,
};

const userSlice = createSlice({
	name: "user",
	initialState: initialState,
	reducers: {
		setUser: (state, action: PayloadAction<any>) => {
			state.user = action.payload;
		},
		setError: (state, action: PayloadAction<any>) => {
			state.error = action.payload;
		},
		logout: (state) => {
			state.user = null;
			state.error = null;
		},
	},
});

export const { setUser, setError, logout } = userSlice.actions;
export default userSlice.reducer;
