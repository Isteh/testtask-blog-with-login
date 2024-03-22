import {
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';
import { loadState } from '../storage';
import axios from 'axios';
import { API_PREFIX } from '@/consts';

export const JWT_PERSISTENT_STATE = 'userData';

export interface UserPersistentState {
  jwt: string | null;
}

export interface UserState {
  jwt: string | null;
  loginErrorMessage?: string;
}

const initialState: UserState = {
  jwt:
    loadState<UserPersistentState>(
      JWT_PERSISTENT_STATE
    )?.jwt ?? null,
  loginErrorMessage: undefined,
};

export const login = createAsyncThunk(
  'user/login',
  async (params: {
    email: string;
    password: string;
  }) => {
    console.log(params);
    const { data } = await axios.post(
      `${API_PREFIX}/login`,
      {
        ...params,
      }
    );
    return data;
  }
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      state.jwt = null;
    },
    clearLoginError: (state) => {
      state.loginErrorMessage = undefined;
    },
  },
  extraReducers: (buider) => {
    buider.addCase(
      login.fulfilled,
      (state, action) => {
        state.jwt = action.payload.token;
      }
    );
    buider.addCase(
      login.rejected,
      (state, action) => {
        state.loginErrorMessage =
          action.error.message;
      }
    );
  },
});

export default userSlice.reducer;
export const userActions = userSlice.actions;
