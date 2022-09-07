import { createAsyncThunk } from "@reduxjs/toolkit";
import { ILink } from "../../types";
import { baseUrl } from "../../api/apiService";

export const getLinks = createAsyncThunk<ILink[], string, { rejectValue: string }>(
  "links/getLinks",
  async (access_token: string, { rejectWithValue }) => {
    const response = await fetch(
      `${baseUrl}/statistics?order=desc_counter&offset=0&limit=0`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    );
    if (!response.ok) {
      return rejectWithValue("Server Error!");
    }
    const data = await response.json();

    return data as ILink[];
  }
);
