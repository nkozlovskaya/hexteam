import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../../api/apiService";
import { ILink } from "../../types";

export const addNewLink = createAsyncThunk<
  ILink,
  string[],
  { rejectValue: string }
>("links/addNewLink", async ([link, access_token], { rejectWithValue }) => {
  const response = await fetch(`${baseUrl}squeeze?link=${link}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${access_token}`,
    },
    body: JSON.stringify(link),
  });

  if (!response.ok) {
    return rejectWithValue("Can't add task. Server error.");
  }

  return (await response.json()) as ILink;
});
