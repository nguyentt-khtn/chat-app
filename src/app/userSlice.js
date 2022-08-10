import { createSlice } from "@reduxjs/toolkit";

const user = createSlice({
    name: 'user',
    initialState: {},
    reducers: {
        loginUser: (state, action) => {
            state = action.payload
        }
    }
})

const { reducer, actions } = user
export const { loginUser } = actions
export default reducer