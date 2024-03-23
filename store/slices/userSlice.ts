import {
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';
import { loadState } from '../storage';
import axios, { AxiosError } from 'axios';
import { API_PREFIX } from '@/consts';

export const JWT_PERSISTENT_STATE = 'userData';

export interface UserPersistentState {
  jwt: string | null;
}

export interface UserState {
  jwt: string | null;
  authErrorMessage?: string;
}

const initialState: UserState = {
  jwt:
    loadState<UserPersistentState>(
      JWT_PERSISTENT_STATE
    )?.jwt ?? null,
  authErrorMessage: undefined,
};

export const login = createAsyncThunk(
  'user/login',
  async (params: {
    email: string;
    password: string;
  }) => {
    try {
      const { data } = await axios.post(
        `${API_PREFIX}/login`,
        {
          ...params,
        }
      );
      return data;
    } catch (e) {
      if (e instanceof AxiosError)
        throw new Error(e.response?.data.message);
    }
  }
);

export const registration = createAsyncThunk(
  'user/registration',
  async (params: {
    email: string;
    password: string;
  }) => {
    try {
      const { data } = await axios.post(
        `${API_PREFIX}/registration`,
        {
          ...params,
        }
      );
      return data;
    } catch (e) {
      if (e instanceof AxiosError)
        throw new Error(e.response?.data.message);
    }
  }
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      state.jwt = null;
    },
    clearAuthError: (state) => {
      state.authErrorMessage = undefined;
    },
  },
  extraReducers: (buider) => {
    //login
    buider.addCase(
      login.fulfilled,
      (state, action) => {
        if (!action.payload) {
          return;
        }
        state.jwt = action.payload.token;
      }
    );
    buider.addCase(
      login.rejected,
      (state, action) => {
        state.authErrorMessage =
          action.error.message;
      }
    );
    //registration
    buider.addCase(
      registration.fulfilled,
      (state, action) => {
        if (!action.payload) {
          return;
        }
        state.jwt = action.payload.token;
      }
    );
    buider.addCase(
      registration.rejected,
      (state, action) => {
        state.authErrorMessage =
          action.error.message;
      }
    );
  },
});

export default userSlice.reducer;
export const userActions = userSlice.actions;
