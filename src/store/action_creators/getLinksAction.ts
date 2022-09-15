import { createAsyncThunk } from "@reduxjs/toolkit";
import { ILink } from "../../types";
import { baseUrl } from "../../api/apiService";

export const getLinks = createAsyncThunk<
  ILink[],
  [string, number],
  { rejectValue: string }
>(
  "links/getLinks",
  async ([access_token, currentPage], { rejectWithValue }) => {
    const offset = 15 * currentPage;
    const response = await fetch(
      `${baseUrl}statistics?order=desc_counter&offset=${offset}&limit=15`,
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
