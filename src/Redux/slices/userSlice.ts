import { PayloadAction, createSlice } from "@reduxjs/toolkit";
const initialState = {
  username: "",
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    updateName: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
  },
});
export const { updateName } = userSlice.actions;
export default userSlice.reducer;
