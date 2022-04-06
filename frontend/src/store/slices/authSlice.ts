import { createSlice, Dispatch, PayloadAction } from '@reduxjs/toolkit';
import { IAuthResponse, IRegisterResponse, LoginData, RegisterData, User } from '../../interfaces/Login';
import { AppThunk, RootState } from '../store';
import { axiosInstance } from '../../core/axios';
import { notification } from 'antd';




export interface AuthState {
  accessToken: string | null;

  registerLoading: boolean;
  registerError: string | null;

  loginLoading: boolean;
  loginError: string | null;

  user: User | null;
  isAuthenticated: boolean;
}

export const initialState: AuthState = {
  accessToken: null,

  registerLoading: false,
  registerError: null,

  loginLoading: false,
  loginError: null,

  user: null,
  isAuthenticated: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {

    registerRequest: (state) => {
      state.registerLoading = true;
    },
    registerSuccess: (state, action: PayloadAction<IRegisterResponse>) => {
      state.registerLoading = false;
    },
    registerFailure: (state, action: PayloadAction<string>) => {
      state.registerLoading = false;
      state.registerError = action.payload;
    },

    setAccessToken: (state, action) => {
      state.accessToken = action.payload.accessToken;
    },
    loginRequest: (state) => {
      state.loginLoading = true;
    },
    loginSuccess: (state, action: PayloadAction<IAuthResponse>) => {
      state.loginLoading = false;
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.accessToken = localStorage.getItem('accessToken');
    },
    loginFailure: (state, action: PayloadAction<string>) => {
      state.loginLoading = false;
      state.loginError = action.payload;
      state.isAuthenticated = false;
    },



    logoutAction: () => initialState,
  },
});

export const {
  setAccessToken,

  registerRequest,
  registerSuccess,
  registerFailure,

  loginRequest,
  loginSuccess,
  loginFailure,

  logoutAction,
} = authSlice.actions;

export const register = ( registerData: RegisterData): AppThunk => async (
  dispatch,
) => {
  dispatch(registerRequest());
  try {
    const res = await axiosInstance.post<IRegisterResponse>('/auth/signup', registerData);
    dispatch(registerSuccess(res.data));

    notification.success({
      message: 'Пользователь успешно зарегистрирован'
    });

  } catch {
    console.log('checkAuthError message= ');
    dispatch(registerFailure('Register error'));
  }
};

export const login = (loginData: LoginData): AppThunk => async (
  dispatch,
) => {
  dispatch(loginRequest());
  try {
    const res = await axiosInstance.post<IAuthResponse>('/auth/signin', loginData);

    localStorage.setItem('accessToken', res.data.accessToken);
    localStorage.setItem('refreshToken', res.data.refreshToken);
    dispatch(loginSuccess(res.data));
    dispatch(setAccessToken({ accessToken: res.data.accessToken }));

    notification.success({
      message: 'Вы успешно вошли'
    });
  } catch {
    console.log('checkAuthError message= ');
    notification.error({
      message: 'Не удалось войти',
      description:
        'Неверные данные',
    });
    dispatch(loginFailure('Login error'));
  }
};

export const logout = () => (dispatch: Dispatch) => {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
  dispatch(setAccessToken({ accessToken: null }));
  dispatch(logoutAction());
};



export const isAuthenticatedSelector = (state: RootState) =>
  state.auth.isAuthenticated;
export const userSelector = (state: RootState) => state.auth.user;
export const userRoleSelector = (state: RootState) => state.auth.user?.role;
export const userIdSelector = (state: RootState) => state.auth.user?._id;
export const userNameSelector = (state: RootState) => state.auth.user?.name;


export default authSlice.reducer;
