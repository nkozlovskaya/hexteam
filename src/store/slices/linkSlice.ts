import { AnyAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ILink } from "../../types";
import { addNewLink } from "../action_creators/addNewLinkAction";
import { getLinks } from "../action_creators/getLinksAction";

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
      .addCase(addNewLink.pending, (state) => {
        state.error = "";
      })
      .addCase(addNewLink.fulfilled, (state, action) => {
        state.links.push(action.payload);
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
