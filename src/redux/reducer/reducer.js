import { createSlice } from "@reduxjs/toolkit";

const initialState = { currentUser: null }

const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        currentUser(state, action) {
            state.currentUser = action.payload;
        },
    },
})
export const { currentUser } = UserSlice.actions
export default UserSlice.reducer;