import { AnyAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ILink } from "../../types";
import { getLinks } from "../action_creators/actionLinks";

export interface LinkState {
  links: ILink[];
  loading: boolean;
  error: string;
  access_token: string;
}

const initialState: LinkState = {
  links: [],
  loading: false,
  error: "",
  access_token: "",
};

export const linkSlice = createSlice({
  name: "links",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getLinks.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(getLinks.fulfilled, (state, action) => {
        state.links = action.payload;
        state.loading = false;
      })
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

function isError(action: AnyAction) {
  return action.type.endsWith("rejected");
}


const linkReducer = linkSlice.reducer;
export default linkReducer;

