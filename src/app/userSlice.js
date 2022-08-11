import { createSlice } from "@reduxjs/toolkit";

const userLogin = createSlice({
  name: "userLogin",
  initialState: {},
  reducers: {
    loginUser: (state, action) => {
      state = action.payload;
      console.log({state})
    },
  },
});

const { reducer, actions } = userLogin;
export const { loginUser } = actions;
export default reducer;
