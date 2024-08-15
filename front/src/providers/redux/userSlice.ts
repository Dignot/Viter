import { createSlice } from '@reduxjs/toolkit';

type User = {
  login: string;
  name: string;
  email: string;
};
type UserData = {
  user: User | null;
  authorized: boolean;
  register: boolean;
};

const initialState: UserData = {
  user: null,
  authorized: false,
  register: false,
};

export const userSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    saveUser: (state, action) => {
      const { login, name, email } = action.payload;
      state.user = { login: login, name: name, email: email };
      state.authorized = true;
    },
  },
});

export const { saveUser } = userSlice.actions;
export default userSlice.reducer;
