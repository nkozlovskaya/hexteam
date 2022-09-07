import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../types";

const initialState: IUser = {
  loggedIn: false,
  access_token: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.access_token = action.payload.access_token;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
